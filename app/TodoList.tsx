"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Calendar } from "@/components/ui/calendar"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [open, setOpen] = useState(false)

  const tasks = [
    { id: 1, text: "Finish UI design for dashboard", done: true },
    { id: 2, text: "Fix bug in authentication flow", done: true },
    { id: 3, text: "Prepare for client meeting with detailed agenda and design docs that might overflow", done: true },
    { id: 4, text: "Update dependencies in package.json", done: false },
    { id: 5, text: "Write documentation for API with examples and detailed explanation of edge cases", done: false },
    { id: 6, text: "Code review PR #42", done: true },
    { id: 7, text: "Implement dark mode toggle with theme persistence", done: false },
    { id: 8, text: "Test payment gateway integration", done: false },
    { id: 9, text: "Optimize images and improve Lighthouse score", done: false },
    { id: 10, text: "Deploy latest build to staging server", done: true },
    { id: 11, text: "Fix cross-browser layout issues on Safari", done: false },
    { id: 12, text: "Update user profile UI with avatar upload", done: true },
    { id: 13, text: "Research about WebSockets for live notifications", done: false },
    { id: 14, text: "Refactor old components to use hooks", done: false },
    { id: 15, text: "Plan sprint backlog for next week", done: true },
  ]

  return (
    <div className="w-full">
      <h1 className="text-lg font-medium mb-6">Todo List</h1>

      {/* Date Picker */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button className="w-full flex items-center gap-2">
            <CalendarIcon className="h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a Date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-2">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(selectedDate) => {
              setDate(selectedDate)
              setOpen(false)
            }}
            className="rounded-lg border"
          />
        </PopoverContent>
      </Popover>

      {/* Tasks List */}
      <ScrollArea className="mt-4 h-80 rounded-md border p-2">
        <div className="flex flex-col gap-3">
          {tasks.map((task) => (
            <Card key={task.id} className="p-4">
              <div className="flex items-start gap-3">
                <Checkbox id={`task-${task.id}`} defaultChecked={task.done} />
                <ScrollArea className="max-h-16 w-full">
                  <label
                    htmlFor={`task-${task.id}`}
                    className="text-sm text-muted-foreground leading-tight block pr-2"
                  >
                    {task.text}
                  </label>
                </ScrollArea>
              </div>
            </Card>
          ))}
        </div>
      </ScrollArea>
    </div>
  )
}

export default TodoList
