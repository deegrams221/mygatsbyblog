---
title: "Networking Fundamentals"
date: "2021-02-15"
---

# Learning About Networking

I'm currently taking a course through <img src='https://people.withyouwithme.com/wp-content/uploads/2020/04/70c8d9af-wide-blackgreen-01-5.png' alt='WithYouWithMe Logo' width='65'>, it's a Networking Fundamentals course. This course is a foundational course that reviews the different components of a network, how they interact with one another, how data moves through a network, and how a smaller network connects to the wider internet.

## Network Topologies:

- A <b>Network Topology</b> is the way computer systems and network devices are connected to one another

### Star Topology

- The most common topology
- All computers are connected to a central connection point, such as a hub or a switch
- All data on a star network topology passes through the cental point before continuing to its destination and is commonly utilized within a LAN (Local Area Network)

| Pro                                                                                                                                             | Con                                                                                                                                   |
| ----------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| If one computer failed or if ther was a break in the cable, the other computers would not be affected because each computer has their own cable | Creates a single point of failure, if the central hub or switch fails, then all the computers on that central point would be affected |

---

### Bus Topology

- Creates a network in which each of the computers and network devices are connected to a single cable or backbone
- A <b>backbone</b> (within a Bus Topology) is the part of the network that ties different departmental networks, computers or devices into a single connection carrying the bulk of the data
- In order for this set up to remain operational, there must not be any open connections including the ends that attach to the computers
- If a computer is removed, added, or if the terminators are loose or missing the cable would be open and data would bounce back creating signal reflection

| Pro                                                 | Con                                                              |
| --------------------------------------------------- | ---------------------------------------------------------------- |
| This topology is fairly cheap and easy to implement | Requires the cable to be terminated at both ends of the topology |

---

### Tree Topology

- The tree topology is a branching version of the bus topology
- Each branch within the network is terminated to prevent signal reflection and data is passed to all devices attached to the network

---

### Ring Topology

- Creates a network where each computer is connected to each other creating the shape of a closed loop or ring
- Every computer in the ring topology has exactly two neighbors for communication purposes
- Each data packet is sent around the ring until it reaches it's final destination

| Pro                  | Con                               |
| -------------------- | --------------------------------- |
| Easy to install      | No longer practical               |
| Easy to troubleshoot | Creates a single point of failure |

---

### Mesh Topology

- Creates a network where each computer or device on the network connects to every other computer or device on the network
- Avoiding single points of failure through several connection points it's more unlikely to experience a loss

| Pro                                               | Con                                                                     |
| ------------------------------------------------- | ----------------------------------------------------------------------- |
| Great for WANs (wide area networks)               | Increased cabling and network device makes this topology more expensive |
| Provides a high-level redundancy network solution |
| No single point of failure                        |

---

### Hybrid Topology

- Topologies can be combined with others
- Most buisinesses use a form of hybrid topologies
- The most common forms of hybrid topologies are the <b>star ring topology</b> and the <b>star bus topology</b>
- In a <b>star bus network topology</b> two or more star topologies are linked together using a single bus connection
- In a <b>star ring network</b> two or more star topologies are linked together to form a large ring network

---

### Point-to-Point Topology

- This topology has two hosts that are directly connected to each other using a single cable
- These connections can be comprised of any network device or computer
- The point set topology is the simplest of all the topologies

---

### Clietnt Server Topology

- Connects clients directly to a centralized dedicated server to access resources rather than connecting to each other
- Commonly used in businesses instead of having to put all the resources on each computer
- All clients can access resources as needed
- Network administrators can manage their centralized resources allowing for easier management and higher efficiency

---

### Point to Mulipoint Network Topology

- Commonly used in wireless outdoor networks
- A central wireless base station is utilized to connect additional wireless locations around it
- In this topology the other wireless locations do not pass data between one another
- The additional wireless locations are often referred to as clients while the base access point acts as the access point

---

### Peer to Peer Topology

- A network topology in which all the clients on the network pass data to one another sharing resources
- This type of connection is often referred to as a workgroup
- Simple to set up
- Typically found in private resendences and small businesses
