import React, { useState, useEffect } from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StatCard = ({ title, value, change, icon, color }) => (
  <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-zinc-500 dark:text-zinc-400">{title}</p>
        <p className="mt-2 text-3xl font-bold text-zinc-900 dark:text-white">{value}</p>
        {change!== undefined && (
          <p className={`mt-2 text-xs font-semibold ${change >= 0? 'text-green-500' : 'text-red-500'}`}>
            {change >= 0? '↑' : '↓'} {Math.abs(change)}% vs last week
          </p>
        )}
      </div>
      <div className={`flex h-14 w-14 items-center justify-center rounded-xl text-2xl ${color}`}>
        {icon}
      </div>
    </div>
  </div>
);

const StatusBadge = ({ status }) => {
  const config = {
    pending: { color: 'bg-yellow-500', label: 'Pending' },
    paid: { color: 'bg-blue-500', label: 'Paid' },
    processing: { color: 'bg-orange-500', label: 'Processing' },
    shipped: { color: 'bg-purple-500', label: 'Shipped' },
    delivered: { color: 'bg-green-500', label: 'Delivered' },
    cancelled: { color: 'bg-red-500', label: 'Cancelled' },
    returned: { color: 'bg-zinc-500', label: 'Returned' },
    confirmed: { color: 'bg-green-500', label: 'Confirmed' },
    completed: { color: 'bg-blue-500', label: 'Completed' },
    'no-show': { color: 'bg-zinc-500', label: 'No Show' }
  };
  const c = config[status] || config.pending;
  return <span className={`inline-flex rounded-full px-3 py-1 text-xs font-bold text-white ${c.color}`}>{c.label}</span>;
};

export const Admin = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [orders, setOrders] = useState([]);
  const [styleSessions, setStyleSessions] = useState([]);
  const [customers, setCustomers] = useState([]);

  // Mock data - replace with axios calls
  useEffect(() => {
    setOrders([
      { _id: '1', itemName: 'Oversized Heavy Tee', customerName: 'Freddy Thompson', size: 'L', color: 'Black', status: 'paid', total: 140, createdAt: '2026-05-30T09:55:35.695Z' },
      { _id: '2', itemName: 'Cargo Parachute Pants', customerName: 'Ama Boateng', size: 'M', color: 'Olive', status: 'processing', total: 280, createdAt: '2026-05-30T10:15:00.000Z' },
      { _id: '3', itemName: 'Linen Summer Set', customerName: 'Kwame Nkrumah', size: 'XL', color: 'Beige', status: 'delivered', total: 450, createdAt: '2026-05-29T18:00:00.000Z' },
      { _id: '4', itemName: 'Denim Work Jacket', customerName: 'Akosua Mensah', size: 'S', color: 'Indigo', status: 'cancelled', total: 320, createdAt: '2026-05-29T14:30:00.000Z' },
    ]);

    setStyleSessions([
      { _id: 'r1', customerName: 'Kojo Asante', date: '2026-05-31', time: '14:00', type: 'Virtual Styling', status: 'confirmed' },
      { _id: 'r2', customerName: 'Efua Owusu', date: '2026-05-31', time: '16:30', type: 'In-Store', status: 'pending' },
      { _id: 'r3', customerName: 'Yaw Mensah', date: '2026-05-30', time: '11:00', type: 'Wardrobe Audit', status: 'completed' },
    ]);

    setCustomers([
      { _id: 'c1', name: 'Freddy Thompson', email: 'poptonydm@gmail.com', orders: 3, totalSpent: 860, lastOrder: '2026-05-30' },
      { _id: 'c2', name: 'Ama Boateng', email: 'ama@gmail.com', orders: 1, totalSpent: 280, lastOrder: '2026-05-30' },
      { _id: 'c3', name: 'Kojo Asante', email: 'kojo@gmail.com', orders: 0, totalSpent: 0, lastOrder: null },
    ]);
  }, []);

  // Analytics
  const totalRevenue = orders.filter(o => o.status!== 'cancelled').reduce((sum, o) => sum + o.total, 0);
  const todayRevenue = orders
 .filter(o => new Date(o.createdAt).toDateString() === new Date().toDateString())
 .reduce((sum, o) => sum + o.total, 0);

  const ordersByStatus = {
    active: orders.filter(o => ['paid', 'processing', 'shipped'].includes(o.status)).length,
    completed: orders.filter(o => o.status === 'delivered').length,
    cancelled: orders.filter(o => o.status === 'cancelled').length
  };

  const revenueData = [
    { day: 'Mon', revenue: 620 },
    { day: 'Tue', revenue: 890 },
    { day: 'Wed', revenue: 720 },
    { day: 'Thu', revenue: 1100 },
    { day: 'Fri', revenue: 1450 },
    { day: 'Sat', revenue: 2100 },
    { day: 'Sun', revenue: 1800 }
  ];

  const orderStatusData = [
    { name: 'Active', value: ordersByStatus.active, color: '#f43f5e' },
    { name: 'Completed', value: ordersByStatus.completed, color: '#10b981' },
    { name: 'Cancelled', value: ordersByStatus.cancelled, color: '#ef4444' }
  ];

  const topCategories = [
    { name: 'Tops', value: 42 },
    { name: 'Bottoms', value: 28 },
    { name: 'Outerwear', value: 18 },
    { name: 'Accessories', value: 12 }
  ];

  const updateOrderStatus = async (orderId, newStatus) => {
    setOrders(prev => prev.map(o => o._id === orderId? {...o, status: newStatus } : o));
  };

  const updateSessionStatus = async (resId, newStatus) => {
    setStyleSessions(prev => prev.map(r => r._id === resId? {...r, status: newStatus } : r));
  };

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '📊' },
    { id: 'orders', label: 'Orders', icon: '🛍️' },
    { id: 'sessions', label: 'Style Sessions', icon: '✨' },
    { id: 'customers', label: 'Customers', icon: '👥' }
  ];

  return (
    <div className="min-h-screen bg-zinc-50 px-4 py-8 text-zinc-900 dark:bg-neutral-950 dark:text-white">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold">EMMA<span className="text-rose-500">STUDIO</span> Admin</h1>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">Manage orders, sessions & track performance</p>
        </div>

        {/* Tabs */}
        <div className="mb-8 flex gap-2 overflow-x-auto border-b border-zinc-200 dark:border-zinc-800">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 whitespace-nowrap border-b-2 px-4 py-3 font-semibold transition ${
                activeTab === tab.id
              ? 'border-rose-500 text-rose-500'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              <span>{tab.icon}</span> {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Stats */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <StatCard title="Total Revenue" value={`₵${totalRevenue}`} change={18.3} icon="💰" color="bg-green-100 dark:bg-green-900/30" />
              <StatCard title="Today's Revenue" value={`₵${todayRevenue}`} change={-2.1} icon="📈" color="bg-blue-100 dark:bg-blue-900/30" />
              <StatCard title="Active Orders" value={ordersByStatus.active} icon="📦" color="bg-rose-100 dark:bg-rose-900/30" />
              <StatCard title="Total Customers" value={customers.length} change={9.4} icon="👥" color="bg-purple-100 dark:bg-purple-900/30" />
            </div>

            {/* Charts */}
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
                <h3 className="mb-4 text-lg font-bold">Revenue This Week</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="day" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: '#18181b', border: 'none' }} />
                    <Line type="monotone" dataKey="revenue" stroke="#f43f5e" strokeWidth={3} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
                <h3 className="mb-4 text-lg font-bold">Top Categories</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={topCategories}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                    <XAxis dataKey="name" stroke="#9ca3af" />
                    <YAxis stroke="#9ca3af" />
                    <Tooltip contentStyle={{ backgroundColor: '#18181b', border: 'none' }} />
                    <Bar dataKey="value" fill="#f43f5e" radius={[8, 8, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === 'orders' && (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">All Orders</h2>
              <div className="flex gap-2">
                <span className="rounded-lg bg-rose-500/20 px-3 py-1 text-sm font-semibold text-rose-600 dark:text-rose-400">
                  {ordersByStatus.active} Active
                </span>
                <span className="rounded-lg bg-green-500/20 px-3 py-1 text-sm font-semibold text-green-600 dark:text-green-400">
                  {ordersByStatus.completed} Done
                </span>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-50 dark:bg-zinc-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Order ID</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Customer</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Product</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Size/Color</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Total</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Status</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Date</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {orders.map(order => (
                      <tr key={order._id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                        <td className="px-6 py-4 font-mono text-sm">#{order._id.slice(-6).toUpperCase()}</td>
                        <td className="px-6 py-4 font-semibold">{order.customerName}</td>
                        <td className="px-6 py-4 text-zinc-600 dark:text-zinc-400">{order.itemName}</td>
                        <td className="px-6 py-4 text-sm">{order.size} / <span className="inline-block h-3 w-3 rounded-full" style={{backgroundColor: order.color}}></span></td>
                        <td className="px-6 py-4 font-bold text-rose-500">₵{order.total}</td>
                        <td className="px-6 py-4"><StatusBadge status={order.status} /></td>
                        <td className="px-6 py-4 text-sm text-zinc-500">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <select
                            value={order.status}
                            onChange={(e) => updateOrderStatus(order._id, e.target.value)}
                            className="rounded-lg border border-zinc-300 bg-white px-3 py-1 text-sm dark:border-zinc-700 dark:bg-zinc-800"
                          >
                            <option value="paid">Paid</option>
                            <option value="processing">Processing</option>
                            <option value="shipped">Shipped</option>
                            <option value="delivered">Delivered</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="returned">Returned</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Style Sessions Tab */}
        {activeTab === 'sessions' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Style Sessions</h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {styleSessions.map(session => (
                <div key={session._id} className="rounded-2xl bg-white p-6 shadow-lg dark:bg-zinc-900">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="text-lg font-bold">{session.customerName}</h3>
                    <StatusBadge status={session.status} />
                  </div>
                  <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                    <p>📅 {new Date(session.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}</p>
                    <p>🕐 {session.time}</p>
                    <p>✨ {session.type}</p>
                  </div>
                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() => updateSessionStatus(session._id, 'confirmed')}
                      className="flex-1 rounded-lg bg-green-500 py-2 text-xs font-bold text-white hover:bg-green-600"
                    >
                      Confirm
                    </button>
                    <button
                      onClick={() => updateSessionStatus(session._id, 'cancelled')}
                      className="flex-1 rounded-lg bg-red-500 py-2 text-xs font-bold text-white hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === 'customers' && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Customers</h2>
            <div className="overflow-hidden rounded-2xl bg-white shadow-lg dark:bg-zinc-900">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-zinc-50 dark:bg-zinc-800">
                    <tr>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Name</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Email</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Orders</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Total Spent</th>
                      <th className="px-6 py-4 text-left text-xs font-bold uppercase text-zinc-500">Last Order</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800">
                    {customers.map(customer => (
                      <tr key={customer._id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50">
                        <td className="px-6 py-4 font-semibold">{customer.name}</td>
                        <td className="px-6 py-4 text-sm text-zinc-600 dark:text-zinc-400">{customer.email}</td>
                        <td className="px-6 py-4">{customer.orders}</td>
                        <td className="px-6 py-4 font-bold text-rose-500">₵{customer.totalSpent}</td>
                        <td className="px-6 py-4 text-sm text-zinc-500">
                          {customer.lastOrder? new Date(customer.lastOrder).toLocaleDateString() : 'Never'}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};