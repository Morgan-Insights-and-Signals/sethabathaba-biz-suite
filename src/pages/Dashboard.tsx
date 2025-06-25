
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  TrendingUp, 
  Target, 
  MessageSquare, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Plus,
  Search,
  Filter,
  MoreHorizontal
} from "lucide-react";

const Dashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Mock data for leads
  const leads = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah@example.com",
      source: "Facebook",
      status: "new",
      value: "$5,000",
      lastContact: "2 hours ago",
      icon: Facebook
    },
    {
      id: 2,
      name: "Mike Chen",
      email: "mike@example.com",
      source: "LinkedIn",
      status: "qualified",
      value: "$12,000",
      lastContact: "1 day ago",
      icon: Linkedin
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily@example.com",
      source: "Instagram",
      status: "contacted",
      value: "$3,500",
      lastContact: "3 days ago",
      icon: Instagram
    },
    {
      id: 4,
      name: "Robert Wilson",
      email: "robert@example.com",
      source: "WhatsApp",
      status: "converted",
      value: "$8,500",
      lastContact: "1 week ago",
      icon: MessageSquare
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new": return "bg-blue-100 text-blue-800";
      case "qualified": return "bg-yellow-100 text-yellow-800";
      case "contacted": return "bg-purple-100 text-purple-800";
      case "converted": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">BizBoost</div>
              <div className="ml-8 text-sm text-gray-500">Dashboard</div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                Settings
              </Button>
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-medium">
                U
              </div>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Leads</CardTitle>
              <Users className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,350</div>
              <p className="text-xs text-muted-foreground">
                +20.1% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <Target className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24.5%</div>
              <p className="text-xs text-muted-foreground">
                +5.2% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Revenue</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$45,231</div>
              <p className="text-xs text-muted-foreground">
                +12.5% from last month
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
              <MessageSquare className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">
                3 new this week
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Lead Management */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle>Lead Management</CardTitle>
                <CardDescription>
                  Manage and track your leads from all social media platforms
                </CardDescription>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Plus className="h-4 w-4 mr-2" />
                Add Lead
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="all" className="w-full">
              <div className="flex justify-between items-center mb-4">
                <TabsList>
                  <TabsTrigger value="all">All Leads</TabsTrigger>
                  <TabsTrigger value="new">New</TabsTrigger>
                  <TabsTrigger value="qualified">Qualified</TabsTrigger>
                  <TabsTrigger value="converted">Converted</TabsTrigger>
                </TabsList>
                <div className="flex space-x-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search leads..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                </div>
              </div>
              
              <TabsContent value="all" className="space-y-4">
                <div className="rounded-md border">
                  <div className="grid grid-cols-6 gap-4 p-4 bg-gray-50 font-medium text-sm">
                    <div>Contact</div>
                    <div>Source</div>
                    <div>Status</div>
                    <div>Value</div>
                    <div>Last Contact</div>
                    <div>Actions</div>
                  </div>
                  {leads.map((lead) => (
                    <div key={lead.id} className="grid grid-cols-6 gap-4 p-4 border-t hover:bg-gray-50">
                      <div>
                        <div className="font-medium">{lead.name}</div>
                        <div className="text-sm text-gray-500">{lead.email}</div>
                      </div>
                      <div className="flex items-center">
                        <lead.icon className="h-4 w-4 mr-2 text-blue-600" />
                        <span className="text-sm">{lead.source}</span>
                      </div>
                      <div>
                        <Badge className={getStatusColor(lead.status)}>
                          {lead.status}
                        </Badge>
                      </div>
                      <div className="font-medium">{lead.value}</div>
                      <div className="text-sm text-gray-500">{lead.lastContact}</div>
                      <div>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Social Media Integration */}
        <Card>
          <CardHeader>
            <CardTitle>Social Media Integrations</CardTitle>
            <CardDescription>
              Connect your social media accounts to start capturing leads
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {[
                { name: "WhatsApp", icon: MessageSquare, connected: true, color: "text-green-600" },
                { name: "Facebook", icon: Facebook, connected: true, color: "text-blue-600" },
                { name: "Instagram", icon: Instagram, connected: false, color: "text-pink-600" },
                { name: "LinkedIn", icon: Linkedin, connected: true, color: "text-blue-700" },
                { name: "Twitter", icon: Twitter, connected: false, color: "text-blue-400" },
                { name: "TikTok", icon: Target, connected: false, color: "text-black" },
              ].map((platform) => (
                <div key={platform.name} className="text-center">
                  <div className={`bg-gray-50 rounded-lg p-6 mb-3 hover:bg-gray-100 transition-colors border-2 ${platform.connected ? 'border-green-200' : 'border-gray-200'}`}>
                    <platform.icon className={`h-8 w-8 mx-auto ${platform.color} mb-2`} />
                    <p className="text-sm font-medium text-gray-700">{platform.name}</p>
                    {platform.connected ? (
                      <Badge className="mt-2 bg-green-100 text-green-800">Connected</Badge>
                    ) : (
                      <Button variant="outline" size="sm" className="mt-2">
                        Connect
                      </Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
