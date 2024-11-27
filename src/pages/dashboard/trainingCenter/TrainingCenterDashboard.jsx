import React , { useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, Briefcase, Star, Settings, LogOut, UserCircle } from "lucide-react"
import DashboardPage from '@/components/layout/DashboardLayout'
import ProtectedRoute from "@/components/ProtectedRoute";
import useLogout from '@/pages/loginPage/logout'
import axios from 'axios'


const TrainingCenterDashboard = ({ artisan = { name: "John Doe", skill: "Carpenter", rating: 4.5 } }) => {
  const logout = useLogout();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const [userData, setUserData] = useState(null); // Holds the user data
  const navigate = useNavigate();

  console.log(userData);

  // Fetch user data from API
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const accessToken = localStorage.getItem("accessToken");
        const userId = localStorage.getItem("userId");

        if (!accessToken || !userId) {
          return; // If no token or userId, you can handle this with a redirect or error state
        }

        const response = await axios.get(`${API_BASE_URL}/training-center/${userId}`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (response.data.success) {
          setUserData(response.data.data); // Set the user data in state
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);


  if (!userData) {
    return <div>Loading...</div>; // Show loading state until data is fetched
  }



  return (
    <ProtectedRoute href='/training-center/dashboard'>

    
    {/* <DashboardPage  title="Training Center Dashboard"> */}
    <div className="container mx-auto p-6">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold"> Dashboard  </h1>
        <div className="flex gap-2">
          <Button variant="outline" onClick={() => navigate('/biodata')}>
            <UserCircle className="mr-2 h-4 w-4" /> Update Profile
          </Button>
          <Button variant="outline">
            <Settings className="mr-2 h-4 w-4" /> Settings
          </Button>
          <Button variant="destructive" onClick={logout}>
            <LogOut className="mr-2 h-4 w-4" /> Logout
          </Button>
        </div>
      </header>
      

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2 border-green-400 p-4 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Profile</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <Avatar className="h-24 w-24 mb-4">
              <AvatarImage src="/placeholder.svg?height=96&width=96" alt={artisan.name} />
              <AvatarFallback>{userData.trainingCentreName}</AvatarFallback> 
              {/* {artisan.name.split(' ').map(n => n[0]).join('')}  */}
            </Avatar>
            <h2 className="text-2xl font-semibold">{userData.trainingCentreName}</h2>
            <Badge className="mt-2">{userData.contactPerson}</Badge>
            <div className="flex items-center mt-2">
              <Star className="h-5 w-5 text-yellow-400 mr-1" />
              <span>{artisan.rating}</span>
            </div>
          </CardContent>
        </Card>

        <Card className="border-2 border-yellow-400 p-4 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Company Info</CardTitle>
          </CardHeader>
          <CardContent>
            
          </CardContent>
        </Card>

        <Card className="border-2 border-green-400 p-4 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle>Profession</CardTitle>
          </CardHeader>
          <CardContent>
          <div className="text-md text-emerald-800 mb-2">
              Sector: {userData.contactPerson}
            </div>
            <div className="text-md text-emerald-800 mb-2">
              Sector: {userData.contactPerson}
            </div>
              
          </CardContent>
        </Card>
      </div>

      <div className="mt-6">
        <Card className="border-2 border-red-400 p-4 rounded-lg shadow-md">
          <CardHeader>
            <CardTitle> Assigned Up-Skilling Center</CardTitle>
          </CardHeader>
          <CardContent>

          </CardContent>
        </Card>
      </div>
    </div>

      
    {/* </DashboardPage> */}
    </ProtectedRoute>
  )
}

export default TrainingCenterDashboard