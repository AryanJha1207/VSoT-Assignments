import { useState, useRef, useEffect } from 'react'
import { format, isToday, differenceInDays } from 'date-fns'
import { v4 as uuidv4 } from 'uuid'
import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import DatePicker from 'react-datepicker'
import { CalendarHeatmap } from 'react-calendar-heatmap'
import { ToastContainer, toast } from 'react-toastify'
import 'react-datepicker/dist/react-datepicker.css'
import 'react-calendar-heatmap/dist/styles.css'
import 'react-toastify/dist/ReactToastify.css'
import './App.css'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    try {
      const raw = localStorage.getItem('tasks')
      const parsed = raw ? JSON.parse(raw) : []
      // Migrate old tasks to new format
      return parsed.map(task => ({
        id: task.id || uuidv4(),
        text: task.text,
        completed: task.completed || false,
        createdAt: task.createdAt || new Date().toISOString(),
        completedAt: task.completedAt || null,
        category: task.category || 'General',
        priority: task.priority || 'medium',
        points: task.points || (task.priority === 'high' ? 10 : task.priority === 'medium' ? 5 : 3),
        dueDate: task.dueDate || null,
        recurring: task.recurring || 'none',
        timeBlock: task.timeBlock || '',
        notes: task.notes || ''
      }))
    } catch (e) {
      return []
    }
  })
  const [filter, setFilter] = useState('ALL')
  const [userStats, setUserStats] = useState(() => {
    try {
      const raw = localStorage.getItem('userStats')
      return raw ? JSON.parse(raw) : {
        totalPoints: 0,
        level: 1,
        currentStreak: 0,
        longestStreak: 0,
        completedToday: 0,
        lastCompletedDate: null
      }
    } catch (e) {
      return {
        totalPoints: 0,
        level: 1,
        currentStreak: 0,
        longestStreak: 0,
        completedToday: 0,
        lastCompletedDate: null
      }
    }
  })
  const [celebrating, setCelebrating] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('General')
  const [notes, setNotes] = useState('')
  const [dueDate, setDueDate] = useState(null)
  const [recurring, setRecurring] = useState('none')
  const [timeBlock, setTimeBlock] = useState('')
  const [theme, setTheme] = useState('default')
  const [pomodoroTime, setPomodoroTime] = useState(25 * 60) // 25 minutes in seconds
  const [pomodoroRunning, setPomodoroRunning] = useState(false)
  const [minimalMode, setMinimalMode] = useState(false)
  const inputRef = useRef(null)

  const categories = ['General', 'Work', 'Personal', 'Health']

  function addTask() {
    const value = inputRef.current.value.trim()
    if (!value) return
    const newTask = {
      id: uuidv4(),
      text: value,
      completed: false,
      createdAt: new Date().toISOString(),
      completedAt: null,
      category: selectedCategory,
      priority: 'medium',
      points: 5,
      dueDate: dueDate ? dueDate.toISOString() : null,
      recurring: recurring,
      timeBlock: timeBlock,
      notes: notes.trim()
    }
    setTasks(prev => [...prev, newTask])
    inputRef.current.value = ''
    setNotes('')
    setDueDate(null)
    setRecurring('none')
    setTimeBlock('')
  }

  function toggleTask(id) {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const wasCompleted = t.completed
        const nowCompleted = !wasCompleted
        if (nowCompleted && !wasCompleted) {
          // Award points and update stats
          const pointsEarned = t.points
          setUserStats(prevStats => {
            const newTotalPoints = prevStats.totalPoints + pointsEarned
            const newLevel = Math.floor(newTotalPoints / 100) + 1
            const today = format(new Date(), 'yyyy-MM-dd')
            const lastDate = prevStats.lastCompletedDate
            let newStreak = prevStats.currentStreak
            if (!lastDate || differenceInDays(new Date(today), new Date(lastDate)) === 1) {
              newStreak += 1
            } else if (differenceInDays(new Date(today), new Date(lastDate)) > 1) {
              newStreak = 1
            }
            return {
              ...prevStats,
              totalPoints: newTotalPoints,
              level: newLevel,
              currentStreak: newStreak,
              longestStreak: Math.max(prevStats.longestStreak, newStreak),
              completedToday: isToday(new Date()) ? prevStats.completedToday + 1 : 1,
              lastCompletedDate: today
            }
          })
          setCelebrating(id)
          setTimeout(() => setCelebrating(null), 1000) // Celebrate for 1 second
          toast.success(`Task completed! +${t.points} points`, { position: "top-right", autoClose: 2000 })
          return { ...t, completed: true, completedAt: new Date().toISOString() }
        } else if (!nowCompleted && wasCompleted) {
          // Deduct points if uncompleting (optional)
          setUserStats(prevStats => ({
            ...prevStats,
            totalPoints: Math.max(0, prevStats.totalPoints - t.points)
          }))
          return { ...t, completed: false, completedAt: null }
        }
      }
      return t
    }))
  }

  // persist tasks to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks))
    } catch (e) {
      // ignore write errors
    }
  }, [tasks])

  // persist userStats to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('userStats', JSON.stringify(userStats))
    } catch (e) {
      // ignore write errors
    }
  }, [userStats])

  // Reminders for due tasks
  useEffect(() => {
    const dueTasks = tasks.filter(t => !t.completed && t.dueDate && new Date(t.dueDate) <= new Date())
    if (dueTasks.length > 0) {
      toast.warn(`You have ${dueTasks.length} overdue task(s)!`, { position: "top-right", autoClose: 5000 })
    }
  }, [tasks])

  // Pomodoro timer
  useEffect(() => {
    let interval
    if (pomodoroRunning && pomodoroTime > 0) {
      interval = setInterval(() => setPomodoroTime(time => time - 1), 1000)
    } else if (pomodoroTime === 0) {
      toast.success('Pomodoro session complete!', { position: "top-center", autoClose: 3000 })
      setPomodoroRunning(false)
      setPomodoroTime(25 * 60)
    }
    return () => clearInterval(interval)
  }, [pomodoroRunning, pomodoroTime])

  const visible = tasks.filter(t => {
    if (filter === 'COMPLETED') return t.completed
    if (filter === 'PENDING') return !t.completed
    if (categories.includes(filter)) return t.category === filter
    return true
  }).slice(0, minimalMode ? 3 : tasks.length)

  function exportData() {
    const data = { tasks, userStats, exportedAt: new Date().toISOString() }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'habit-tracker-data.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function shareStats() {
    const text = `I've completed ${completedCount} tasks, reached level ${userStats.level} with ${userStats.totalPoints} points, and have a ${userStats.currentStreak} day streak! #HabitTracker`
    if (navigator.share) {
      navigator.share({ title: 'My Habit Progress', text })
    } else {
      navigator.clipboard.writeText(text).then(() => toast.info('Stats copied to clipboard!'))
    }
  }

  const total = tasks.length
  const completedCount = tasks.filter(t => t.completed).length

  const pieData = categories.map(cat => ({
    name: cat,
    value: tasks.filter(t => t.category === cat).length,
    color: cat === 'General' ? '#f1f4f8' : cat === 'Work' ? '#ffdd57' : cat === 'Personal' ? '#08a4ff' : '#ff6b6b'
  })).filter(d => d.value > 0)

  // Line chart data for completion trends (last 7 days)
  const lineData = Array.from({ length: 7 }, (_, i) => {
    const date = new Date()
    date.setDate(date.getDate() - (6 - i))
    const dayStr = format(date, 'yyyy-MM-dd')
    const completedOnDay = tasks.filter(t => t.completedAt && format(new Date(t.completedAt), 'yyyy-MM-dd') === dayStr).length
    return { date: format(date, 'MMM dd'), completed: completedOnDay }
  })

  // Heatmap data
  const heatmapData = tasks.filter(t => t.completedAt).map(t => ({
    date: format(new Date(t.completedAt), 'yyyy-MM-dd'),
    count: 1
  })).reduce((acc, curr) => {
    const existing = acc.find(item => item.date === curr.date)
    if (existing) existing.count += 1
    else acc.push(curr)
    return acc
  }, [])

  return (
    <div className={"app " + theme}>
      <div className="header">
        <h1 className="heading">Task Filter App</h1>
        <div className="header-controls">
          <select className="theme-select" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="default">Default</option>
            <option value="dark">Dark</option>
            <option value="light">Light</option>
          </select>
          <button className="minimal-btn" onClick={() => setMinimalMode(!minimalMode)}>
            {minimalMode ? 'FULL VIEW' : 'MINIMAL'}
          </button>
        </div>
      </div>

      <div className="input-sec">
        <input
          ref={inputRef}
          className="input"
          type="text"
          placeholder="Enter Your Task"
          onKeyDown={(e) => { if (e.key === 'Enter') addTask() }}
          aria-label="New task"
        />
        <select
          className="category-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          aria-label="Task category"
        >
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
        <button className="add" onClick={addTask}>ADD TASK</button>
      </div>

      <div className="notes-sec">
        <textarea
          className="notes-input"
          placeholder="Add notes or journal entry (optional)"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          aria-label="Task notes"
        />
      </div>

      <div className="scheduling-sec">
        <div className="scheduling-row">
          <label>Due Date: <DatePicker selected={dueDate} onChange={setDueDate} placeholderText="Select due date" /></label>
          <label>Recurring: 
            <select value={recurring} onChange={(e) => setRecurring(e.target.value)}>
              <option value="none">None</option>
              <option value="daily">Daily</option>
              <option value="weekly">Weekly</option>
              <option value="monthly">Monthly</option>
            </select>
          </label>
          <label>Time Block: <input type="time" value={timeBlock} onChange={(e) => setTimeBlock(e.target.value)} /></label>
        </div>
      </div>

      <div className="buttons" role="tablist" aria-label="Filters">
        <button onClick={() => setFilter('ALL')} aria-pressed={filter==='ALL'}>ALL</button>
        <button onClick={() => setFilter('COMPLETED')} aria-pressed={filter==='COMPLETED'}>COMPLETED</button>
        <button onClick={() => setFilter('PENDING')} aria-pressed={filter==='PENDING'}>PENDING</button>
        {categories.map(cat => (
          <button key={cat} onClick={() => setFilter(cat)} aria-pressed={filter===cat}>{cat}</button>
        ))}
      </div>

      <div className="info">
        <h4>Total: <span className="all">{total}</span> | Completed: <span className="comp">{completedCount}</span></h4>
        <div className="stats">
          <h4>Level: <span className="level">{userStats.level}</span> | Points: <span className="points">{userStats.totalPoints}</span> | Streak: <span className="streak">{userStats.currentStreak}</span></h4>
        </div>
        {pieData.length > 0 && (
          <div className="chart">
            <h4>Task Distribution by Category</h4>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}>
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
        <div className="chart">
          <h4>Completion Trend (Last 7 Days)</h4>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={lineData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="completed" stroke="#08a4ff" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="heatmap">
          <h4>Activity Heatmap</h4>
          <CalendarHeatmap
            startDate={new Date(new Date().setDate(new Date().getDate() - 90))}
            endDate={new Date()}
            values={heatmapData}
            classForValue={(value) => {
              if (!value) return 'color-empty'
              return `color-scale-${Math.min(value.count, 4)}`
            }}
            tooltipDataAttrs={(value) => ({
              'data-tip': value.date ? `${value.date}: ${value.count} tasks` : 'No data'
            })}
          />
        </div>
      </div>

      <div className="tasks">
        {visible.map(t => (
          <div key={t.id} className={"task" + (t.completed ? ' completed' : '') + (celebrating === t.id ? ' celebrate' : '')}>
            <input className="task-checkbox" type="checkbox" checked={t.completed} onChange={() => toggleTask(t.id)} aria-label={`Toggle ${t.text}`} />
            <div className="task-content">
              <span className="task-text" onClick={() => toggleTask(t.id)}>{t.text}</span>
              {t.notes && <div className="task-notes">{t.notes}</div>}
              <div className="task-meta">
                Category: {t.category} | Points: {t.points}
                {t.dueDate && <span> | Due: {format(new Date(t.dueDate), 'MMM dd')}</span>}
                {t.timeBlock && <span> | Time: {t.timeBlock}</span>}
                {t.recurring !== 'none' && <span> | Recurring: {t.recurring}</span>}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="export-sec">
        <button className="export-btn" onClick={exportData}>EXPORT DATA</button>
        <button className="share-btn" onClick={shareStats}>SHARE STATS</button>
      </div>

      <div className="pomodoro-sec">
        <h4>Pomodoro Timer</h4>
        <div className="timer">{Math.floor(pomodoroTime / 60)}:{(pomodoroTime % 60).toString().padStart(2, '0')}</div>
        <button className="pomodoro-btn" onClick={() => setPomodoroRunning(!pomodoroRunning)}>
          {pomodoroRunning ? 'PAUSE' : 'START'}
        </button>
        <button className="pomodoro-btn" onClick={() => { setPomodoroRunning(false); setPomodoroTime(25 * 60) }}>RESET</button>
      </div>

      {/* <ToastContainer /> */}
      <ToastContainer />
    </div>
  )
}
