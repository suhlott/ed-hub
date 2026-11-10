"use client";

import { useState } from "react";

const updates = [
  {
    id: 1,
    date: "November 10, 2026",
    title: "Welcome to the Emergency Department Hub",
    content:
      "Use this site to review department updates, locate upcoming meetings, access shared resources, and find work contact information.",
  },
  {
    id: 2,
    date: "November 8, 2026",
    title: "Upcoming Staff Meeting",
    content:
      "The next Emergency Department staff meeting will be available through Microsoft Teams. Visit the calendar section for meeting information.",
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
    description:
      "Information, checklists, and reference materials for department orientation.",
    link: "#",
  },
  {
    id: 2,
    name: "Education Materials",
    description:
      "Department education, presentations, and professional development resources.",
    link: "#",
  },
  {
    id: 3,
    name: "Forms and Checklists",
    description:
      "Frequently used department forms, checklists, and supporting documents.",
    link: "#",
  },
  {
    id: 4,
    name: "Meeting Documents",
    description:
      "Department meeting agendas, minutes, presentations, and supporting materials.",
    link: "#",
  },
];

const employees = [
  {
    id: 1,
    name: "Scott Uhlott",
    title: "Associate Nurse Manager",
    email: "work-email@example.org",
    phoneDisplay: "217.223.1200",
    phoneLink: "2172231200",
  },
  {
    id: 2,
    name: "Matthew Wontorcik",
    title: "Nurse Manager",
    email: "work-email@example.org",
    phoneDisplay: "217.223.1200",
    phoneLink: "2172231200",
  },
  {
    id: 3,
    name: "Emergency Department",
    title: "Department Main Line",
    email: "department-email@example.org",
    phoneDisplay: "217.223.1200",
    phoneLink: "2172231200",
  },
];

export default function Home() {
  const [directorySearch, setDirectorySearch] = useState("");

  const filteredEmployees = employees.filter((employee) => {
    const searchableText =
      `${employee.name} ${employee.title} ${employee.email}`.toLowerCase();

    return searchableText.includes(directorySearch.toLowerCase().trim());
  });

  const handlePlaceholderLink = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: string,
  ) => {
    if (link === "#") {
      event.preventDefault();
    }
  };

  return (
    <main className="min-h-screen bg-[#f7f8f9] text-[#596771]">
      <header className="sticky top-0 z-50 border-b-4 border-[#32a9c1] bg-[#00306c] text-white shadow-md">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-5 px-5 py-4">
          <a
            href="#home"
            className="flex items-center"
            aria-label="Emergency Department Hub home"
          >
            <div className="border-l-4 border-[#32a9c1] pl-4">
              <p className="text-xl font-bold tracking-tight text-white">
                Emergency Department Hub
              </p>

              <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#e0e1e2]">
                Blessing Health System
              </p>
            </div>
          </a>

          <nav
            aria-label="Main navigation"
            className="flex flex-wrap gap-1 text-sm font-semibold"
          >
            <a
              href="#updates"
              className="rounded-md px-3 py-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#32a9c1]"
            >
              Updates
            </a>

            <a
              href="#calendar"
              className="rounded-md px-3 py-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#32a9c1]"
            >
              Calendar
            </a>

            <a
              href="#resources"
              className="rounded-md px-3 py-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#32a9c1]"
            >
              Resources
            </a>

            <a
              href="#directory"
              className="rounded-md px-3 py-2 text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#32a9c1]"
            >
              Directory
            </a>
          </nav>
        </div>
      </header>

      <section
        id="home"
        className="scroll-mt-28 bg-gradient-to-r from-[#005596] to-[#32a9c1] text-white"
      >
        <div className="mx-auto max-w-7xl px-5 py-16 md:py-24">
          <div className="max-w-3xl">
            <p className="mb-5 inline-flex border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.12em] text-white">
              Emergency Department Staff Portal
            </p>

            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl">
              Department information in one convenient location.
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-white">
              Review department updates, find Microsoft Teams meeting links,
              access shared resources, and locate approved work contact
              information from any device.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#calendar"
                className="rounded-md bg-[#00306c] px-6 py-3 font-semibold text-white shadow-md hover:bg-[#002653] focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                View calendar
              </a>

              <a
                href="#resources"
                className="rounded-md border-2 border-white bg-transparent px-6 py-3 font-semibold text-white hover:bg-white hover:text-[#005596] focus:outline-none focus:ring-4 focus:ring-white/40"
              >
                Browse resources
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-5 py-14 md:py-20">
        <section aria-labelledby="quick-access-heading">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#005596]">
              Quick access
            </p>

            <h2
              id="quick-access-heading"
              className="mt-2 text-3xl font-bold text-[#00306c]"
            >
              Find what you need
            </h2>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Updates",
                description: "Read the latest department announcements.",
                link: "#updates",
              },
              {
                title: "Calendar",
                description: "Find upcoming meetings and Teams links.",
                link: "#calendar",
              },
              {
                title: "Resources",
                description: "Open shared files and department folders.",
                link: "#resources",
              },
              {
                title: "Directory",
                description: "Find approved employee work contacts.",
                link: "#directory",
              },
            ].map((item) => (
              <a
                key={item.title}
                href={item.link}
                className="group border-t-4 border-[#32a9c1] bg-white p-6 shadow-sm transition hover:border-[#005596] hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#32a9c1]/30"
              >
                <h3 className="text-xl font-bold text-[#00306c]">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-[#596771]">
                  {item.description}
                </p>

                <p className="mt-5 font-semibold text-[#005596] group-hover:underline">
                  Open section
                  <span aria-hidden="true"> →</span>
                </p>
              </a>
            ))}
          </div>
        </section>

        <section id="updates" className="scroll-mt-28">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#005596]">
                Department news
              </p>

              <h2 className="mt-2 text-3xl font-bold text-[#00306c]">
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
                className="border border-[#e0e1e2] bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-[#005596]">
                  {update.date}
                </p>

                <h3 className="mt-3 text-xl font-bold text-[#00306c]">
                  {update.title}
                </h3>

                <p className="mt-3 leading-7 text-[#596771]">
                  {update.content}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="calendar" className="scroll-mt-28">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#005596]">
              Meetings and events
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#00306c]">
              Upcoming calendar
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#596771]">
              Select a meeting link to open Microsoft Teams. Meeting links
              should only be added when the meeting is appropriate for public
              sharing.
            </p>
          </div>

          <div className="overflow-hidden border border-[#e0e1e2] bg-white shadow-sm">
            {events.map((event, index) => (
              <article
                key={event.id}
                className={`flex flex-col gap-5 p-6 md:flex-row md:items-center ${
                  index !== events.length - 1
                    ? "border-b border-[#e0e1e2]"
                    : ""
                }`}
              >
                <div className="flex h-20 w-20 shrink-0 flex-col items-center justify-center bg-[#00306c] text-white">
                  <span className="text-xs font-semibold tracking-[0.15em]">
                    {event.month}
                  </span>

                  <span className="text-3xl font-bold">{event.day}</span>
                </div>

                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[#00306c]">
                    {event.title}
                  </h3>

                  <p className="mt-2 text-[#596771]">{event.dateTime}</p>

                  <p className="mt-1 text-sm font-semibold text-[#005596]">
                    {event.location}
                  </p>
                </div>

                <a
                  href={event.teamsLink}
                  onClick={(clickEvent) =>
                    handlePlaceholderLink(clickEvent, event.teamsLink)
                  }
                  target={event.teamsLink === "#" ? undefined : "_blank"}
                  rel={event.teamsLink === "#" ? undefined : "noreferrer"}
                  aria-disabled={event.teamsLink === "#"}
                  className={`rounded-md px-5 py-3 text-center font-semibold text-white focus:outline-none focus:ring-4 focus:ring-[#32a9c1]/30 ${
                    event.teamsLink === "#"
                      ? "cursor-not-allowed bg-[#596771]"
                      : "bg-[#005596] hover:bg-[#00306c]"
                  }`}
                >
                  {event.teamsLink === "#" ? "Link coming soon" : "Join Teams"}
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="resources" className="scroll-mt-28">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#005596]">
              Shared documents
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#00306c]">
              Resource library
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#596771]">
              Access public-safe department materials, forms, presentations,
              and meeting documents.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {resources.map((resource) => (
              <article
                key={resource.id}
                className="border border-[#e0e1e2] bg-white p-6 shadow-sm"
              >
                <div className="flex items-start gap-4">
                  <div
                    aria-hidden="true"
                    className="flex h-12 w-12 shrink-0 items-center justify-center bg-[#32a9c1] text-lg font-bold text-white"
                  >
                    FILE
                  </div>

                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#005596]">
                      Resource folder
                    </p>

                    <h3 className="mt-2 text-xl font-bold text-[#00306c]">
                      {resource.name}
                    </h3>

                    <p className="mt-3 leading-6 text-[#596771]">
                      {resource.description}
                    </p>

                    <a
                      href={resource.link}
                      onClick={(clickEvent) =>
                        handlePlaceholderLink(clickEvent, resource.link)
                      }
                      target={resource.link === "#" ? undefined : "_blank"}
                      rel={resource.link === "#" ? undefined : "noreferrer"}
                      aria-disabled={resource.link === "#"}
                      className={`mt-5 inline-flex font-semibold ${
                        resource.link === "#"
                          ? "cursor-not-allowed text-[#596771]"
                          : "text-[#005596] hover:underline"
                      }`}
                    >
                      {resource.link === "#"
                        ? "Folder coming soon"
                        : "Open folder →"}
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-5 border-l-4 border-[#a4ce39] bg-white p-5 shadow-sm">
            <p className="font-semibold text-[#00306c]">
              Public resource reminder
            </p>

            <p className="mt-2 text-sm leading-6 text-[#596771]">
              Do not upload patient information, staffing documents,
              credentials, incident reports, private employee information, or
              files intended only for internal organizational use.
            </p>
          </div>
        </section>

        <section id="directory" className="scroll-mt-28">
          <div className="mb-7">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-[#005596]">
              Work contacts
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#00306c]">
              Employee directory
            </h2>

            <p className="mt-3 max-w-2xl leading-7 text-[#596771]">
              Search organization-approved work contact information by
              employee name, position, or work email address.
            </p>
          </div>

          <div className="border border-[#e0e1e2] bg-white p-6 shadow-sm">
            <label
              htmlFor="directory-search"
              className="block font-semibold text-[#00306c]"
            >
              Search the directory
            </label>

            <input
              id="directory-search"
              type="search"
              value={directorySearch}
              onChange={(event) => setDirectorySearch(event.target.value)}
              placeholder="Enter a name, title, or work email"
              className="mt-3 w-full rounded-md border border-[#aeb8be] bg-white px-4 py-3 text-[#27343b] outline-none placeholder:text-[#7b878e] focus:border-[#005596] focus:ring-4 focus:ring-[#32a9c1]/20"
            />

            <p className="mt-2 text-sm text-[#596771]">
              {filteredEmployees.length}{" "}
              {filteredEmployees.length === 1 ? "contact" : "contacts"} found
            </p>

            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {filteredEmployees.map((employee) => (
                <article
                  key={employee.id}
                  className="border-t-4 border-[#005596] bg-[#f7f8f9] p-5"
                >
                  <h3 className="text-lg font-bold text-[#00306c]">
                    {employee.name}
                  </h3>

                  <p className="mt-1 font-semibold text-[#596771]">
                    {employee.title}
                  </p>

                  <div className="mt-5 space-y-2">
                    <a
                      href={`mailto:${employee.email}`}
                      className="block break-all text-sm font-semibold text-[#005596] hover:underline focus:outline-none focus:ring-2 focus:ring-[#32a9c1]"
                    >
                      {employee.email}
                    </a>

                    <a
                      href={`tel:${employee.phoneLink}`}
                      className="block text-sm font-semibold text-[#005596] hover:underline focus:outline-none focus:ring-2 focus:ring-[#32a9c1]"
                    >
                      {employee.phoneDisplay}
                    </a>
                  </div>
                </article>
              ))}

              {filteredEmployees.length === 0 && (
                <div className="border-l-4 border-[#32a9c1] bg-[#f7f8f9] p-5 lg:col-span-3">
                  <p className="font-semibold text-[#00306c]">
                    No matching contact was found.
                  </p>

                  <p className="mt-2 text-sm text-[#596771]">
                    Try searching with fewer letters or using a position title.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5 border-l-4 border-[#a4ce39] bg-[#a4ce39]/10 p-5">
            <p className="font-semibold text-[#00306c]">
              Public directory reminder
            </p>

            <p className="mt-2 text-sm leading-6 text-[#39474e]">
              List only organization-approved work contact information. Do not
              publish personal phone numbers, private email addresses, work
              schedules, employee identification numbers, or other private
              information.
            </p>
          </div>
        </section>
      </div>

      <footer className="border-t-4 border-[#32a9c1] bg-[#00306c] text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-bold text-white">Emergency Department Hub</p>

            <p className="mt-1 text-sm text-[#e0e1e2]">
              11th &amp; Broadway • Quincy, IL • 217.223.1200
            </p>
          </div>

          <a
            href="https://www.blessinghealth.org/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold text-white underline decoration-[#a4ce39] decoration-2 underline-offset-4 hover:text-[#a4ce39] focus:outline-none focus:ring-2 focus:ring-[#32a9c1]"
          >
            blessinghealth.org
          </a>
        </div>
      </footer>
    </main>
  );
}