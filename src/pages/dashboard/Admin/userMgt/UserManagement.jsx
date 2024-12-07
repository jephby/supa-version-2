import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { SquareCheckBig } from 'lucide-react';
import { BioDataDialog } from './components/BioDataDialog';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import useLogout from '@/pages/loginPage/logout';
import { LogOut, UserCircle } from "lucide-react";
import DashboardPage from '@/components/layout/DashboardLayout';
import ProtectedRoute from "@/components/ProtectedRoute";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const UserCert = () => {
  const logout = useLogout();
  const [isBioDataDialogOpen, setIsBioDataDialogOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState(users || []);
  const [roleFilter, setRoleFilter] = useState('');
  const [stateFilter, setStateFilter] = useState('');
  const [lgaFilter, setLgaFilter] = useState('');
  const [senatorialDistrictFilter, setSenatorialDistrictFilter] = useState('');
  const [tradeAreaFilter, setTradeAreaFilter] = useState('');
  const [sectorFilter, setSectorFilter] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      
      try {
        const accessToken = localStorage.getItem("accessToken");
        const response = await axios.get(`${API_BASE_URL}/users`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });
        if (response.data.success) {
          setUsers(response.data.data);
        }
        toast.success("Users fetched successfully");
      } catch (error) {
        toast.error("Error fetching users");
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  useEffect(() => {
    console.log('Users:', users);  // Check what users contains
    if (users && Array.isArray(users)) {
      const filtered = users.filter(user => 
        (roleFilter ? user.role === roleFilter : true) &&
        (stateFilter ? user.stateOfResidence.toLowerCase().includes(stateFilter.toLowerCase()) : true) &&
        (lgaFilter ? user.lgaOfResidence.toLowerCase().includes(lgaFilter.toLowerCase()) : true) &&
        (senatorialDistrictFilter ? user.senatorialDistrict === senatorialDistrictFilter : true) &&
        (tradeAreaFilter ? user.tradeArea === tradeAreaFilter : true) &&
        (sectorFilter ? user.sector === sectorFilter : true)
      );
      setFilteredUsers(filtered);
    }
  }, [users, roleFilter, stateFilter, lgaFilter, senatorialDistrictFilter, tradeAreaFilter, sectorFilter]);
  
  const handleBio = async (userId) => {
    try {
      const accessToken = localStorage.getItem("accessToken");
      const response = await axios.get(`${API_BASE_URL}/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      if (response.data.success) {
        setSelectedUser(response.data.data);
        setIsBioDataDialogOpen(true);
        console.log("data:", response.data)
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      toast.error("Error fetching user data");
    }
  };
  if (loading) {
    return (
        <div className="flex justify-center items-center h-screen">
          <Spinner />
        </div>
    );
  }

  // These arrays would typically come from your backend or be defined elsewhere
  const senatorialDistricts = ['District A', 'District B', 'District C'];
  const tradeAreas = ['Carpentry', 'Plumbing', 'Electrical', 'Masonry'];
  const sectors = ['Construction', 'Technology', 'Agriculture', 'Healthcare'];

  return (
    <ProtectedRoute>
      <DashboardPage title="User Management">
      <div className="container mx-auto p-6">
            <header className="flex justify-between items-center mb-6">
              <div>
                <h1 className="text-3xl font-bold">USER MANAGEMENT</h1>
                <h2 className="text-left font-[700] text-[14px]">
                  (USERS & ADMINISTRATORS)
                </h2>
              </div>
              <div className="flex gap-2">
              <Button variant="outline" onClick={() => navigate('/biodata')}>
                <UserCircle className="mr-2 h-4 w-4" /> Update Profile
              </Button>
              
              <Button variant="destructive" onClick={logout}>
                <LogOut className="mr-2 h-4 w-4" /> Logout
              </Button>
            </div>
              
            </header>
      <div className="mb-4 flex flex-wrap gap-4">
        <Select onValueChange={setRoleFilter} value={roleFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Filter by role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={null}>All Roles</SelectItem>
            <SelectItem value="artisan_user">Artisan User</SelectItem>
            <SelectItem value="intending_artisan">Intending Artisan</SelectItem>
          </SelectContent>
        </Select>
        <Input 
          placeholder="Filter by State" 
          value={stateFilter} 
          onChange={(e) => setStateFilter(e.target.value)}
          className="w-[200px]"
        />
        <Input 
          placeholder="Filter by LGA" 
          value={lgaFilter} 
          onChange={(e) => setLgaFilter(e.target.value)}
          className="w-[200px]"
        />
        <Select onValueChange={setSenatorialDistrictFilter} value={senatorialDistrictFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Senatorial District" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={null}>All Districts</SelectItem>
            {senatorialDistricts.map((district) => (
              <SelectItem key={district} value={district}>{district}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setTradeAreaFilter} value={tradeAreaFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Trade Area" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={null}>All Trade Areas</SelectItem>
            {tradeAreas.map((area) => (
              <SelectItem key={area} value={area}>{area}</SelectItem>
            ))}
          </SelectContent>
        </Select>
        <Select onValueChange={setSectorFilter} value={sectorFilter}>
          <SelectTrigger className="w-[200px]">
            <SelectValue placeholder="Sector" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value={null}>All Sectors</SelectItem>
            {sectors.map((sector) => (
              <SelectItem key={sector} value={sector}>{sector}</SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>State</TableHead>
            <TableHead>LGA</TableHead>
            <TableHead>Senatorial District</TableHead>
            <TableHead>Trade Area</TableHead>
            <TableHead>Sector</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredUsers?.map((user) => (
            <TableRow key={user._id}>
              <TableCell>{user._id}</TableCell>
              <TableCell>{user.firstName} {user.lastName}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell>{user.stateOfResidence}</TableCell>
              <TableCell>{user.lgaOfResidence}</TableCell>
              <TableCell>{user.senatorialDistrict}</TableCell>
              <TableCell>{user.tradeArea}</TableCell>
              <TableCell>{user.sector}</TableCell>
              <TableCell>
                <Button variant="outline" size="sm" onClick={() => handleBio(user._id)}>
                  <SquareCheckBig className="h-4 w-4" />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <BioDataDialog
        isOpen={isBioDataDialogOpen}
        onClose={() => setIsBioDataDialogOpen(false)}
        userData={selectedUser}
      />
    </div>
    </DashboardPage>
    </ProtectedRoute>
  );
};

export default UserCert;