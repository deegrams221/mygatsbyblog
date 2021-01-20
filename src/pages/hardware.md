---
title: "IT Fundamentals"
date: "2021-01-11"
---

# Learning About Hardware

I'm currently taking a course through <img src='https://people.withyouwithme.com/wp-content/uploads/2020/04/70c8d9af-wide-blackgreen-01-5.png' alt='WithYouWithMe Logo' width='65'>, it's an IT Fundamentals course. This cousre is the first step on the path to becoming a Cybersecurity Analyst.

## Some of the first terms I learned are:

- <b>IoT (Internet of Things)</b> - the network of physical objects that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet
- <b>Turing Complete</b> - fully programmable, virtually all programming languages today are Turing complete
- <b>Microprocessor</b> - performs calculations, an integrated circuit that contains all the functions of a central processing unit of a computer
- <b>SoC (System on a Chip)</b> - complete computers on a single chip, containing a microprocessor and memory
- <b>RAM (Random Access Memory)</b> - temporary memory
- <b>Client Machine</b> - personal computers
- <b>Server Machine</b> - computers that share/serve their resources to authorized client machines
- <b>Mainframe</b> - enterprise server, high-performance computers with large amounts of memory and processors that process billions of simple calculations and transactions in real time,a mainframe is critical to commercial databases, transaction servers, and applications that require high resiliency, security, and agility
- <b>Super Computer</b> - mostly used for research, a computer with a high level of performance as compared to a general-purpose computer
- <b>Quantum Computer</b> - smaller than super computer but more powerful

# Hardware I've gone over so far:

## Motherboard (MoBo)

- Delivers power and data communication between all hardware systems
- Comes in various sizes and size matters

Forms of Cooling:

- Air (mobile)
- Fan forced air (laptoos, desktops)
- Water (high end desktops)
- Cryogen (ultra high end desktops, super computers, quantum computers)

Motherboard Specs:

- Form Factor (size; ATX or ITX)
- CPU Sockets
- RAM Slots
- Connectors: PS/2, USB3, Thunderbolt, Serial (RS232), eSATA, Firewire

## CPU - Central Processing Unit

CPU's are like the brain of the computer, they are specified by:

- Manufacturer
- Socket Type
- Number of Cores
- Cache Size
- Host Bus Speed
- Fabrication Process
- Internal Data Path Size
- Special Features

<b>Socket Type</b> = refers to the physical form of the connection between the CPU and MoBo

- Clock Speed of a CPU is specified in Gigahertz (GHz)
- <b>Cores do not stack:</b>
  3GHz 4-core CPU is not the same as 12 GHz 1-core CPU -- Ther first is the better option because most programs are optimized for mulithreading

<b>Multithreading</b> = Splitting instruction and distribution to multiple cores, then recombining

<b>Internal Data Paths:</b>

- 32-bit app = single-core
- 64-bit app = multi-core

## RAM - Random Access Memory

- <b>RAM Frequency</b> = in Megahertz (MHz), refers to read/write cycles per second
- <b>RAM Capacity</b> = measured in Gigabytes (GBs), refers to how much RAM can store
- <b>DRAM Variant</b> = refers to the different types of RAM

## Storage Devices

- Storage drives are persistent (non-volatile), so if power is disconnected and the drive is removed, the data will remain on the drive
- Types of storage drives = NVM, M.2, SSD, HDD, Floppy, Tape
- Storage Drives are specified by type and capacity (measured in bytes)

NVM - Non-Volatile Memory:

- Refers to many types of NAND flash memory
- Similar to RAM but does not lose data when power is disconnected
- Used for long term persistent storage

NVMe M.2 - Non-Volatile Memory express:

- allows for fast read/write speeds

SSD - Solid State Drive

HDD - Hard Disk Drive or Hard Drive

- never open a HHD

## ROM - Read Only Memory

- Non-volatile memory used in computers and other electronic devices
- Data stored in ROM cannot be electronically modified after the manufacture of the memory device
- Some examples include: Barcodes, QR Codes, Punchcard, papertape, CDs, DVDs, Laser Disks, Optical Disk, DNA (emerging)
