"use client"

import { ColumnDef } from "@tanstack/react-table"
import { Checkbox } from "@/components/ui/checkbox"
import { cn } from "@/lib/utils"

export type Payment = {
  id: string
  amount: number
  username: string
  email: string
  status: "pending" | "processing" | "success" | "failed" | "completed"
}

export const columns: ColumnDef<Payment>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
  },
  {
    accessorKey: "username",
    header: "Username",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  // ✅ Status moved before Amount
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as Payment["status"]

      return (
        <div
          className={cn(
            "px-2 py-1 rounded-md w-max text-xs capitalize",
            status === "pending" && "bg-yellow-500/40 text-yellow-700",
            (status === "success" || status === "completed") &&
              "bg-green-500/40 text-green-700",
            status === "failed" && "bg-red-500/40 text-red-700",
            status === "processing" && "bg-blue-500/40 text-blue-700"
          )}
        >
          {status}
        </div>
      )
    },
  },
  
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"))
      return <span>₹{amount.toFixed(2)}</span>
    },
  },
]
