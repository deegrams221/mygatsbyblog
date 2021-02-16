---
title: "IT Fundamentals"
date: "2021-01-11"
---

# Learning About Hardware

I'm currently taking a course through <img src='https://people.withyouwithme.com/wp-content/uploads/2020/04/70c8d9af-wide-blackgreen-01-5.png' alt='WithYouWithMe Logo' width='65'>, it's an IT Fundamentals course. This cousre is an overview of; Hardware, Software, Operating Systems, and IT Horizon Topics.

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

## Graphics Card

- Graphics cards are hardware dedicated to the output of graphics
- On the graphics card, there is a special processor designed for graphics called a Graphics Processing Unit (GPU) and a very fast RAM
- Integrated Graphics = If a mobo has a video connector, such as a VGA or HDMI, then the mobo may have an onboard video output
- Graphics cards are specified by PCIe slot length, model, G-RAM and video outputs
- Graphics cards produce a lot of heat, and usually are sold with multiple fans and big metal heat sinks, or radiators, to keep the part cool.

### Models

- AMD and nVidia are the main producers of graphics cards but they are often rebranded by the various big PC hardware companies
- There is a small selection of graphics cards for gaming, workstation graphics, ect, so most people refer to graphics cards by the model, series and number (for example: GTX 1080)

### RAM / G-RAM

- RAM in graphics cards is specially designed and configured for the high speed needs of graphics
- RAM is usually described here as GDDR RAM, and GDDR5 is the standard

### PCIe

- Peripheral COmponent Interconnect Express (PCIe) slots = these are the expansion slots in the mobo that the graphics cards plug into
- These slots have different lengths; the shortest PCIe slot is the 'x1' or 'Single-Lane', the current largest is the 'x16' or 'Sixteen-Lane'
- PCIe slots 'x4' and 'x8' are common slot sizes
- PCIe slots only have 1 clip at the end

### Video Connector Types

- The three most common connector types are: VGA, DVI, and HDMI

## IO Devices

### Input Output Devices

- IO Devices are external hardware
- Examples of input devices: mouse, keyboard, light pen, scanner, microphone, bar code reader -- these are devices that feed information to the computer
- Examples of output devices: monitor, printer, speakers, headphones, electronic braille pads, actuators -- these are devices that recieve information from the computer
- IO Devices are specified by the type of connector and whether they are an input or output device
- IO Devices can also be specified by type of product

### IO Connectors

- IO Connectors are ports commonly fond on various computers, including: PS/2(mouse, keyboard), USB, Serial, VGA, Parallel, LAN (Ethernet), and Audio jacks (Line In, Line Out, Mic)

## Power Supply (PSU)

- Powers the mobo and all additional devices, such as hard drives, graphics card, and USB mouse
- Laptops have an external power brick instead
- PSUs are specified by thier Power Rating (max output power) in Watts (W)
- Every devicde in a computer uses a certain amount of power in Watts
- Add the power raitin of all devices in a computer + 20% (for insurance) to determine the power supply needed
- PSUs come in 50W increments
- PSU for an average desktop PC is 500W
- PSU for an average gamers PC is 700W
- PSUs also have '80 plus' ratings (Bronze, Silver, Gold, Platinum, Titanium) which refer to efficiency
- Power savings = money savings!

# Summary

## What is hardware?

- Hardware refers to physical parts, components, electronics, and mechanisms which combined form the physical computer
- Hardware is described by its' features and specifications

## Safe handling of hardware

- Hardware can be damaged by Electro Static Discharge
- When handling exposed hardware, used ESD protective devices like ESD wrist straps and grounded workbenches

## What makes up a computer?

### Motherboard (MoBo)

- Foundation, Infrastructure

### Central Processing Unit (CPU)

- Engine or brain

### Random Access Memory (RAM)

- Shor term memory

### Storage Drives

- Long term memory

### Read Only Memory (ROM)

- Un-Editable long term meemory

### Graphics Card (Video Card)

- Produce video/graphics, CPUs aren't good at this

### Input/Outpud Devices (I/O)

- Used to interact with the computer, and allows the computer to provide information to the user

### Power Supply Unit (PSU)

- Powers all hardware and devices
