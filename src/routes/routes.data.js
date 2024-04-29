import Auth from '../components/screens/auth/Auth'
import Login from '../components/screens/auth/login/Login'
import Register from '../components/screens/auth/register/Register'
import CalendarPage from '../components/screens/calendar-page/CalendarPage'
import Home from '../components/screens/home/Home'
import Main from '../components/screens/main/Main'
import Profile from '../components/screens/profile/Profile'
import Settings from '../components/screens/settings/Settings'
import Statistics from '../components/screens/statistics/Statistics'

export const routes = [
	{ path: '/', component: Main },
	{ path: '/auth', component: Auth },
	{ path: '/auth/login', component: Login },
	{ path: '/auth/register', component: Register },
	{ path: '/home', component: Home },
	{ path: '/profile', component: Profile },
	{ path: '/calendar', component: CalendarPage },
	{ path: '/settings', component: Settings },
	{ path: '/statistics', component: Statistics }
]
