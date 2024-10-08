
## Common JS (CJS) 
## EcmaScript Module (ESM)

## Internet Concepts

### IP Address
- **IPv4**
- **IPv6**
- IP address is provided by **DHCP** (Dynamic Host Configuration Protocol) which is assigned by your **ISP** (Internet Service Provider).
- It is a globally unique identity for your device on the internet.

### MAC Address (Physical Address)
- Har device ke paas ek physical address hota hai, jise hum **MAC Address** kehte hain.
- It is used to identify a device on a LAN or Wi-Fi network.

### Proxy
- **Proxy** client side par set hota hai.
- Example: Agar A ko B se baat karni hai, toh hum A ko bolenge pehle C se baat karo, aur C ko bolenge B se baat karo. Yaani A -> C -> B.
- Kabhi kabhi kuch websites ko directly access karna allow nahi hota, toh hum proxy ka use karte hain.

### Reverse Proxy
- **Reverse Proxy** server side par set hota hai.
- Jab request actual server tak pahuchti hai, pehle reverse proxy usko check karta hai:
  - Kya request malicious hai?
  - Kya same request baar baar aa rahi hai? (Protection against DDoS attacks and rate limiting).

### VPN (Virtual Private Network)
- VPN bhi proxy jaisa hi hota hai. Example: A -> C -> B.
- **Difference**:
  - Proxy mein data encrypted nahi hota aur easily track ho sakta hai.
  - VPN mein data **encrypted** hota hai aur easily track nahi hota.

### Server
- **Server** ek computer system hota hai jo request accept karta hai aur response bhejta hai.
- Server ko internet se connected rehna zaroori hai aur wo data ya files share kar sakta hai.

### Client
- **Client** wo device ya software hota hai jo server se request bhejta hai aur response receive karta hai.

### Protocol
- Protocol ek standard set of rules hota hai, jo communication ke liye follow kiya jata hai.

### ISP (Internet Service Provider)
- **ISP** wo organization hai jo aapko internet access provide karta hai.

## Protocols

### TCP (Transmission Control Protocol)
- TCP mein request bhejne ke baad hamesha acknowledgement milta hai.
- **IP** (Internet Protocol) ke saath kaam karta hai.
- Same IP address do logon ke paas alag-alag time par ho sakta hai.
- TCP ensure karta hai ki data doosre insaan tak pahuncha ya nahi, thoda slow hota hai but reliable.

### UDP (User Datagram Protocol)
- UDP bina acknowledgement ke data bhejta rehta hai, check nahi karta ki data pahucha ya nahi.
- Example: Streaming services.
- UDP ka kaam hai jaldi se jaldi data dikhana, bina checking ke.

### HTTP (HyperText Transfer Protocol)

#### HTTP/1.1
- Is version mein **congestion** hoti thi, aap data fast bhej rahe ho, but router dhire-dhire transmit karta hai.

#### HTTP/2
- Yeh version v1 se better hai, zyada data bhejne mein efficient hai but aaj ke time ke hisaab se slow hai.

#### HTTP/3
- Isme **TCP**, **IP**, aur **UDP** ka combination hota hai, jo zyada fast aur reliable communication allow karta hai.
