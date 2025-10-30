export interface FormSubmission {
  id: string
  name: string
  email: string
  phone: string
  destination: string
  message: string
  date: string
}

export function generateCSV(submissions: FormSubmission[]): string {
  if (submissions.length === 0) {
    return "No submissions yet"
  }

  const headers = ["ID", "Name", "Email", "Phone", "Destination", "Message", "Date"]
  const rows = submissions.map((sub) => [
    sub.id,
    sub.name,
    sub.email,
    sub.phone,
    sub.destination,
    sub.message,
    sub.date,
  ])

  const csvContent = [headers, ...rows].map((row) => row.map((cell) => `"${cell}"`).join(",")).join("\n")

  return csvContent
}

export function downloadCSV(submissions: FormSubmission[]): void {
  const csv = generateCSV(submissions)
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const link = document.createElement("a")
  const url = URL.createObjectURL(blob)

  link.setAttribute("href", url)
  link.setAttribute("download", `travel-submissions-${new Date().toISOString().split("T")[0]}.csv`)
  link.style.visibility = "hidden"

  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}
