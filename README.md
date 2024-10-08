<p align="center">
  <a href="" rel="noopener">
 <img src="./public//logo-light.png" alt="Project logo" width="200"></a>
 </a>
</p>

<h3 align="center">The Wild Oasis</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> Hotel Management website.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Screen Shots](#screen_shots)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Built Using](#built_using)
- [License](#license)

## 🧐 About <a name = "about"></a>

"The Wild Oasis" Hotel Management App is a robust, user-friendly solution designed for hotel staff to streamline cabin management, bookings, and guest services. Prioritizing both security and simplicity, the app ensures that only authorized hotel employees can access and operate its features, enhancing operational efficiency and protecting sensitive information...

## 🧐 About <a name = "Features"></a>

1. **User Authentication**

   - New users can only sign up through the app, ensuring that only verified hotel employees can create accounts.

2. **User Profile Management**

   - Employees can personalize their profiles by uploading avatars, changing names, and updating passwords.

3. **Cabin Management**

   - A table view displays all cabins with details such as photos, names, capacity, price, and any current discounts.
   - Users can create new cabins, update or delete existing ones, and upload cabin photos.

4. **Booking Management**

   - A detailed table view showcases booking information, including arrival/departure dates, status, paid amount, cabin details, and guest data.
   - Bookings can be filtered by status: "unconfirmed," "checked in," or "checked out."
   - Users can check in or check out guests and delete bookings when necessary.

5. **Payment Handling**

   - At check-in, users can confirm payment receipt and manage booking payments.
   - Guests can opt to add breakfast for their stay during the check-in process.

6. **Guest Data Management**

   - The app stores detailed guest information, including full name, email, national ID, nationality, and country flag for easy identification.

7. **Dashboard**

   - The initial screen provides key data from the last 7, 30, or 90 days.
   - Displays a list of guests checking in and out on the current day, allowing users to handle related tasks.
   - Includes statistics on recent bookings, sales, check-ins, and occupancy rates.
   - Visual charts show daily hotel sales (including extras like breakfast) and statistics on guest stay durations.

8. **Application-Wide Settings**

   - Users can adjust settings such as breakfast price, minimum/maximum nights per booking, and maximum guest capacity per booking.

9. **Dark Mode**
   - A user-friendly dark mode feature improves visibility and reduces eye strain, particularly in low-light environments.

## 🚀 Live Demo <a name = "life_demo" href="https://the-wild-oasis-dusky-kappa.vercel.app/" >Demo</a>

## 📸 Screenshots <a name = "screen_shots"></a>

### 🚶‍➡️Login

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/loginDarkMode.png?raw=true)

### 🏠 Home Page

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/Dashboard.png?raw=true)

### 👜 Booking Page

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/Bookings.png?raw=true)

### ℹ️ Booking Details Page

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/BookingDetails.png?raw=true)

### 🏠 Cabin Page

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/Cabins.png?raw=true)

### 🌐 Create Cabin

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/CreateCabinPage.jpeg?raw=true)

### ➕ Create New User Page

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/CreateNewUser.png?raw=true)

### ⚙️ Update Account Page

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/CreateNewUser.png?raw=true)

### ⚙️ Settings Page

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/Settings.png?raw=true)

### ☀️ Light Mode Dashboard

![screenshot](https://github.com/abdalhamedemad/The-Wild-Oasis/blob/main/screenshots/lightMode.png?raw=true)

## 🏁 Getting Started <a name = "getting_started"></a>

To install this App follow the instructions below.

### Prerequisites

npm and nodejs should be installed on your system.

### Installing

1. to clone the repository run the following command

```bash
git clone https://github.com/abdalhamedemad/The-Wild-Oasis.git
```

2. to install the dependencies run the following command

```bash
npm install
```

3. to start the app run the following command

```bash
npm run dev
```

4. to start the Json Server run the following command

```bash
npm run server
```

## 🎈 Usage <a name="usage"></a>

after starting the app you can access the app on the following url

```bash
http://localhost:5173
```

## ⛏️ Built Using <a name = "built_using"></a>

- [React](https://reactjs.org/) - Web Framework
- [React-Query](https://tanstack.com/query/v3) - Data Fetching & Caching Library
- [Vite](https://vitejs.dev/) - Build Tool
- [React-Router](https://reactrouter.com/) - Routing Library
- [supabase](https://supabase.com/) - Backed Server
- [react-hook-form](https://react-hook-form.com/) - Form Hook Library
- [recharts](https://recharts.org/en-US/) - Charts Library
- [react-toastify](https://fkhadra.github.io/react-toastify/introduction/) - Notification Library
- [react-icons](https://react-icons.github.io/react-icons/) - Icon Library
- [styled-components](https://styled-components.com/) - Styling Library

## 📄 License <a name = "authors"></a>

This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE) file for details.
