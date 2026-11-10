"use client";

import { useState } from "react";

const updates = [
  {
    id: 1,
    date: "November 10, 2026",
    title: "Welcome to the ED Hub",
    content:
      "Use this site to find department updates, upcoming meetings, shared resources, and employee contact information.",
  },
  {
    id: 2,
    date: "November 8, 2026",
    title: "Upcoming Staff Meeting",
    content:
      "The next Emergency Department staff meeting will be held online. Visit the calendar for the Microsoft Teams link.",
  },
  {
    id: 3,
    date: "November 5, 2026",
    title: "New Resources Available",
    content:
      "New education materials and meeting documents have been added to the resource library.",
  },
];

const events = [
  {
    id: 1,
    month: "NOV",
    day: "18",
    title: "ED Staff Meeting",
    dateTime: "November 18, 2026 • 2 pm",
    location: "Microsoft Teams",
    teamsLink: "#",
  },
  {
    id: 2,
    month: "NOV",
    day: "22",
    title: "Department Education",
    dateTime: "November 22, 2026 • 11 am",
    location: "Microsoft Teams",
    teamsLink: "#",
  },
  {
    id: 3,
    month: "DEC",
    day: "03",
    title: "Leadership Update",
    dateTime: "December 3, 2026 • 1 pm",
    location: "Microsoft Teams",
    teamsLink: "#",
  },
];

const resources = [
  {
    id: 1,
    name: "Orientation Resources",
    description: "Information and materials for department orientation.",
    type: "Folder",
  },
  {
    id: 2,
    name: "Education Materials",
    description: "Department education, presentations, and reference materials.",
    type: "Folder",
  },
  {
    id: 3,
    name: "Forms and Checklists",
    description: "Frequently used forms, checklists, and department documents.",
    type: "Folder",
  },
  {
    id: 4,
    name: "Meeting Documents",
    description: "Meeting agendas, minutes, and supporting materials.",
    type: "Folder",
  },
];

const employees = [
  {
    id: 1,
    name: "Scott Uhlott",
    title: "Associate Nurse Manager",
    email: "work-email@example.org",
    phone: "217.223.1200",
  },
  {
    id: 2,
    name: "Matthew Wontorcik",
    title: "Nurse Manager",
    email: "work-email@example.org",
    phone: "217.223.1200",
  },
  {
    id: 3,
    name: "Department Main Line",
    title: "Emergency Department",
    email: "department-email@example.org",
    phone: "217.223.1200",
  },
];

export default function Home() {
  const [directorySearch, setDirectorySearch] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    const searchableText =
      `${employee.name} ${employee.title} ${employee.email}`.toLowerCase();

    return searchableText.includes(directorySearch.toLowerCase());
  });

  return (
    <main className="min-h-screen bg-[#f5f7f8] text-[#27343b]">
      <header className="sticky top-0 z-50 border-b border-white/20 bg-[#00306c] text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#a4ce39] text-lg font-black text-[#00306c]">
              ED
            </div>

            <div>
              <p className="text-lg font-black tracking-wide">
                Emergency Department Hub
              </p>
              <p className="text-xs text-[#e0e1e2]">
                Department information and resources
              </p>
            </div>
          </a>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap gap-1 text-sm font-semibold"
          >
            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#updates">
              Updates
            </a>
            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#calendar">
              Calendar
            </a>
            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#resources">
              Resources
            </a>
            <a className="rounded-lg px-3 py-2 hover:bg-white/10" href="#directory">
              Directory
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="bg-gradient-to-br from-[#00306c] via-[#005596] to-[#32a9c1] text-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-4 inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-bold">
              Emergency Department Staff Portal
            </p>

            <h1 className="text-4xl font-black leading-tight md:text-6xl">
              Information your team needs, all in one place.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-50">
              Review department updates, find meeting links, access shared
              resources, and locate work contact information from any device.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#calendar"
                className="rounded-xl bg-[#a4ce39] px-6 py-3 font-bold text-[#00306c] shadow-lg hover:bg-[#b6dc53]"
              >
                View calendar
              </a>

              <a
                href="#resources"
                className="rounded-xl border border-white/60 bg-white/10 px-6 py-3 font-bold text-white hover:bg-white/20"
              >
                Browse resources
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-16 px-5 py-12 md:py-16">
        <section aria-labelledby="quick-access-heading">
          <h2 id="quick-access-heading" className="sr-only">
            Quick access
          </h2>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Updates", "Read the latest department information.", "#updates"],
              ["Calendar", "Find meetings and Teams links.", "#calendar"],
              ["Resources", "Open shared files and folders.", "#resources"],
              ["Directory", "Find employee work contacts.", "#directory"],
            ].map(([title, description, link]) => (
              <a
                key={title}
                href={link}
                className="group rounded-2xl border border-[#e0e1e2] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#32a9c1] hover:shadow-lg"
              >
                <div className="mb-4 h-2 w-14 rounded-full bg-[#32a9c1]" />
                <h3 className="text-xl font-black text-[#00306c]">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-[#596771]">
                  {description}
                </p>
                <p className="mt-5 font-bold text-[#005596] group-hover:underline">
                  Open section →
                </p>
              </a>
            ))}
          </div>
        </section>

        <section id="updates" className="scroll-mt-28">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="font-bold uppercase tracking-widest text-[#005596]">
                Department news
              </p>
              <h2 className="mt-1 text-3xl font-black text-[#00306c]">
                Latest updates
              </h2>
            </div>

            <p className="text-sm text-[#596771]">
              Most recent information appears first.
            </p>
          </div>

          <div className="grid gap-5 lg:grid-cols-3">
            {updates.map((update) => (
              <article
                key={update.id}
                className="rounded-2xl border border-[#e0e1e2] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-bold text-[#005596]">{update.date}</p>
                <h3 className="mt-2 text-xl font-black text-[#00306c]">
                  {update.title}
                </h3>
                <p className="mt-3 leading-7 text-[#596771]">{update.content}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="calendar" className="scroll-mt-28">
          <div className="mb-6">
            <p className="font-bold uppercase tracking-widest text-[#005596]">
              Meetings and events
            </p>
            <h2 className="mt-1 text-3xl font-black text-[#00306c]">
              Upcoming calendar
            </h2>
          </div>

          <div className="overflow-hidden rounded-2xl border border-[#e0e1e2] bg-white shadow-sm">
            {events.map((event, index) => (
              <article
                key={event.id}
                className={`flex flex-col gap-5 p-6 md:flex-row md:items-center ${
                  index !== events.length - 1
                    ? "border-b border-[#e0e1e2]"
                    : ""
                }`}
              >
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center rounded-xl bg-[#00306c] text-white">
                  <span className="text-xs font-black tracking-widest">
                    {event.month}
                  </span>
                  <span className="text-3xl font-black">{event.day}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-black text-[#00306c]">
                    {event.title}
                  </h3>
                  <p className="mt-1 text-[#596771]">{event.dateTime}</p>
                  <p className="mt-1 text-sm font-semibold text-[#005596]">
                    {event.location}
                  </p>
                </div>

                <a
                  href={event.teamsLink}
                  className="rounded-xl bg-[#005596] px-5 py-3 text-center font-bold text-white hover:bg-[#00306c]"
                >
                  Join Teams
                </a>
              </article>
            ))}
          </div>

          <p className="mt-3 text-sm text-[#596771]">
            The buttons are placeholders until you add your actual Microsoft
            Teams meeting links.
          </p>
        </section>

        <section id="resources" className="scroll-mt-28">
          <div className="mb-6">
            <p className="font-bold uppercase tracking-widest text-[#005596]">
              Shared documents
            </p>
            <h2 className="mt-1 text-3xl font-black text-[#00306c]">
              Resource library
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {resources.map((resource) => (
              <article
                key={resource.id}
                className="rounded-2xl border border-[#e0e1e2] bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#32a9c1]/15 text-2xl"
                  >
                    📁
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-black uppercase tracking-widest text-[#32a9c1]">
                      {resource.type}
                    </p>
                    <h3 className="mt-1 text-xl font-black text-[#00306c]">
                      {resource.name}
                    </h3>
                    <p className="mt-2 leading-6 text-[#596771]">
                      {resource.description}
                    </p>
                    <button
                      type="button"
                      className="mt-4 font-bold text-[#005596] hover:underline"
                    >
                      Open folder →
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="directory" className="scroll-mt-28">
          <div className="mb-6">
            <p className="font-bold uppercase tracking-widest text-[#005596]">
              Work contacts
            </p>
            <h2 className="mt-1 text-3xl font-black text-[#00306c]">
              Employee directory
            </h2>
          </div>

          <div className="rounded-2xl border border-[#e0e1e2] bg-white p-6 shadow-sm">
            <label
              htmlFor="directory-search"
              className="font-bold text-[#00306c]"
            >
              Search by name, title, or work email
            </label>

            <input
              id="directory-search"
              type="search"
              value={directorySearch}
              onChange={(event) => setDirectorySearch(event.target.value)}
              placeholder="Start typing..."
              className="mt-3 w-full rounded-xl border border-[#b8c0c5] px-4 py-3 outline-none focus:border-[#005596] focus:ring-4 focus:ring-[#32a9c1]/20"
            />

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {filteredEmployees.map((employee) => (
                <article
                  key={employee.id}
                  className="rounded-xl border border-[#e0e1e2] p-5"
                >
                  <h3 className="text-lg font-black text-[#00306c]">
                    {employee.name}
                  </h3>
                  <p className="mt-1 font-semibold text-[#596771]">
                    {employee.title}
                  </p>
                  <a
                    href={`mailto:${employee.email}`}
                    className="mt-4 block break-all text-sm font-bold text-[#005596] hover:underline"
                  >
                    {employee.email}
                  </a>
                  <a
                    href={`tel:${employee.phone.replace(/\D/g, "")}`}
                    className="mt-2 block text-sm font-bold text-[#005596] hover:underline"
                  >
                    {employee.phone}
                  </a>
                </article>
              ))}

              {filteredEmployees.length === 0 && (
                <p className="text-[#596771]">
                  No matching employee was found.
                </p>
              )}
            </div>
          </div>

          <div className="mt-4 rounded-xl border-l-4 border-[#a4ce39] bg-[#a4ce39]/10 p-4 text-sm text-[#39474e]">
            Because this website will be public, list only organization-approved
            work contact information. Do not publish personal phone numbers,
            schedules, employee IDs, or other private information.
          </div>
        </section>
      </div>

      <footer className="bg-[#00306c] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-black">Emergency Department Hub</p>
            <p className="mt-1 text-sm text-[#e0e1e2]">
              11th &amp; Broadway • Quincy, IL • 217.223.1200
            </p>
          </div>

          <a
            href="https://www.blessinghealth.org/"
            target="_blank"
            rel="noreferrer"
            className="font-bold text-[#a4ce39] hover:underline"
          >
            blessinghealth.org
          </a>
        </div>
      </footer>
    </main>
  );
}