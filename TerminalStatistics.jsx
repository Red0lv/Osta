import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';

const TerminalStatistics = () => {
  const [activeTab, setActiveTab] = useState('summary');
  
  // Reālie dati, kas iegūti no Excel failiem, ar izņemtiem nepareizajiem kravu veidiem
  const data = {
    totalVehicles: 14952,
    clientStats: [
      { name: 'Billerud Latvia papīrmalka', count: 7304 },
      { name: 'Varpa', count: 2309 },
      { name: 'Billerud Latvia šķelda', count: 1322 },
      { name: 'R Grupa šķelda', count: 1012 },
      { name: 'LF Celulozes', count: 822 },
      { name: 'LF Tehnoloģiskā', count: 742 },
      { name: 'Renostera', count: 630 },
      { name: 'LF Brāķis', count: 374 },
      { name: 'LF Kurināmā', count: 284 },
      { name: 'ACA Timber', count: 80 },
      { name: 'Laskana', count: 23 },
      { name: 'WT malka', count: 50 }
    ],
    // Tikai korekti kravu veidi
    cargoStats: [
      { name: 'Papīrmalka', count: 8261 },
      { name: 'Kokskaidu granulas', count: 2297 },
      { name: 'Celulozes šķelda', count: 2120 },
      { name: 'Kurināmā šķelda', count: 1309 },
      { name: 'Tehnoloģiskā šķelda', count: 730 }
    ],
    monthlyStats: [
      { name: 'Janvāris', count: 1225 },
      { name: 'Februāris', count: 1187 },
      { name: 'Marts', count: 1076 },
      { name: 'Aprīlis', count: 1329 },
      { name: 'Maijs', count: 1608 },
      { name: 'Jūnijs', count: 1572 },
      { name: 'Jūlijs', count: 1112 },
      { name: 'Augusts', count: 1343 },
      { name: 'Septembris', count: 1043 },
      { name: 'Oktobris', count: 1196 },
      { name: 'Novembris', count: 1164 },
      { name: 'Decembris', count: 1097 }
    ],
    quarterlyData: [
      { name: '1. ceturksnis', count: 3488 },
      { name: '2. ceturksnis', count: 4509 },
      { name: '3. ceturksnis', count: 3498 },
      { name: '4. ceturksnis', count: 3457 }
    ]
  };
  
  // Krāsu palete diagrammām
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8'];
  
  // Kopsavilkuma sadaļa
  const renderSummary = () => (
    <div>
      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-3">Galvenie rādītāji</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-white p-3 rounded shadow">
            <p className="text-lg font-semibold">{data.totalVehicles}</p>
            <p className="text-sm text-gray-600">Kopējais transportlīdzekļu skaits</p>
          </div>
          <div className="bg-white p-3 rounded shadow">
            <p className="text-lg font-semibold">{Math.round(data.totalVehicles / 12)}</p>
            <p className="text-sm text-gray-600">Vidēji transportlīdzekļi mēnesī</p>
          </div>
          <div className="bg-white p-3 rounded shadow">
            <p className="text-lg font-semibold">{data.clientStats.length}</p>
            <p className="text-sm text-gray-600">Unikālie klienti</p>
          </div>
          <div className="bg-white p-3 rounded shadow">
            <p className="text-lg font-semibold">{data.cargoStats.length}</p>
            <p className="text-sm text-gray-600">Kravu veidi</p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-md font-semibold mb-4">TOP 5 klienti</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.clientStats.slice(0, 5)} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={150} />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" name="Transportlīdzekļu skaits" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-md font-semibold mb-4">Transportlīdzekļu skaits pa mēnešiem</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data.monthlyStats}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="count" name="Transportlīdzekļu skaits" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-md font-semibold mb-4">Galvenie kravu veidi</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.cargoStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {data.cargoStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-md font-semibold mb-4">Ceturkšņu salīdzinājums</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.quarterlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="count" name="Transportlīdzekļu skaits" fill="#8884d8" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-md font-semibold mb-3">Galvenie secinājumi</h3>
        <ul className="list-disc pl-5 space-y-1">
          <li>Visvairāk transportlīdzekļu apkalpoti maijā ({data.monthlyStats[4].count}) un jūnijā ({data.monthlyStats[5].count}).</li>
          <li>TOP 3 klienti kopā veido {((data.clientStats.slice(0, 3).reduce((sum, client) => sum + client.count, 0) / data.totalVehicles) * 100).toFixed(1)}% no kopējā apjoma.</li>
          <li>Galvenie kravu veidi ir saistīti ar koksnes produktiem, kas veido 100% no reģistrētajām kravām.</li>
          <li>Otrais ceturksnis ir visaktīvākais periods, veidojot {((data.quarterlyData[1].count / data.totalVehicles) * 100).toFixed(1)}% no kopējā gada apjoma.</li>
        </ul>
      </div>
    </div>
  );
  
  // Klientu statistikas sadaļa
  const renderClientStats = () => (
    <div>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Transportlīdzekļu skaits pa klientiem</h3>
        <div className="h-96">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={data.clientStats}
              margin={{ top: 5, right: 30, left: 20, bottom: 120 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" name="Transportlīdzekļu skaits" fill="#0088FE" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-md font-semibold mb-3">TOP Klienti</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b">Nr.</th>
                <th className="py-2 px-4 border-b text-left">Klients</th>
                <th className="py-2 px-4 border-b text-right">Transportlīdzekļu skaits</th>
                <th className="py-2 px-4 border-b text-right">% no kopējā</th>
              </tr>
            </thead>
            <tbody>
              {data.clientStats.map((client, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="py-2 px-4 border-b text-center">{index + 1}</td>
                  <td className="py-2 px-4 border-b">{client.name}</td>
                  <td className="py-2 px-4 border-b text-right">{client.count}</td>
                  <td className="py-2 px-4 border-b text-right">
                    {((client.count / data.totalVehicles) * 100).toFixed(1)}%
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
  
  // Mēnešu statistikas sadaļa
  const renderMonthlyStats = () => (
    <div>
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-lg font-semibold mb-4">Transportlīdzekļu skaits pa mēnešiem</h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data.monthlyStats}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="count" name="Transportlīdzekļu skaits" stroke="#00C49F" strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-md font-semibold mb-3">Mēnešu statistika</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">Mēnesis</th>
                  <th className="py-2 px-4 border-b text-right">Transportlīdzekļu skaits</th>
                  <th className="py-2 px-4 border-b text-right">% no kopējā</th>
                </tr>
              </thead>
              <tbody>
                {data.monthlyStats.map((month, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b">{month.name}</td>
                    <td className="py-2 px-4 border-b text-right">{month.count}</td>
                    <td className="py-2 px-4 border-b text-right">
                      {((month.count / data.totalVehicles) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-md font-semibold mb-3">Ceturkšņu statistika</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.quarterlyData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                >
                  {data.quarterlyData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4">
            <p className="mb-2">
              <span className="font-medium">1. ceturksnis: </span>
              {data.quarterlyData[0].count} transportlīdzekļi ({((data.quarterlyData[0].count / data.totalVehicles) * 100).toFixed(1)}%)
            </p>
            <p className="mb-2">
              <span className="font-medium">2. ceturksnis: </span>
              {data.quarterlyData[1].count} transportlīdzekļi ({((data.quarterlyData[1].count / data.totalVehicles) * 100).toFixed(1)}%)
            </p>
            <p className="mb-2">
              <span className="font-medium">3. ceturksnis: </span>
              {data.quarterlyData[2].count} transportlīdzekļi ({((data.quarterlyData[2].count / data.totalVehicles) * 100).toFixed(1)}%)
            </p>
            <p>
              <span className="font-medium">4. ceturksnis: </span>
              {data.quarterlyData[3].count} transportlīdzekļi ({((data.quarterlyData[3].count / data.totalVehicles) * 100).toFixed(1)}%)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
  
  // Kravu veidu statistikas sadaļa
  const renderCargoStats = () => (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Kravu veidu sadalījums</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data.cargoStats}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="count"
                  label={({ name, percent }) => 
                    percent > 0.05 ? `${name}: ${(percent * 100).toFixed(0)}%` : ''
                  }
                >
                  {data.cargoStats.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-4">Kravu veidu statistika</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead className="bg-gray-100">
                <tr>
                  <th className="py-2 px-4 border-b text-left">Kravas veids</th>
                  <th className="py-2 px-4 border-b text-right">Skaits</th>
                  <th className="py-2 px-4 border-b text-right">% no kopējā</th>
                </tr>
              </thead>
              <tbody>
                {data.cargoStats.map((cargo, index) => (
                  <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                    <td className="py-2 px-4 border-b">{cargo.name}</td>
                    <td className="py-2 px-4 border-b text-right">{cargo.count}</td>
                    <td className="py-2 px-4 border-b text-right">
                      {((cargo.count / data.cargoStats.reduce((sum, c) => sum + c.count, 0)) * 100).toFixed(1)}%
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-4 rounded-lg shadow mb-6">
        <h3 className="text-md font-semibold mb-3">Kravu veidu analīze</h3>
        <p className="mb-2">
          <span className="font-medium">Dominējošie kravu veidi: </span>
          Papīrmalka (56.3%), Kokskaidu granulas (15.7%) un Celulozes šķelda (14.5%) 
          sastāda vairāk nekā 85% no visām kravām.
        </p>
        <p>
          <span className="font-medium">Koksnes produkti: </span>
          Visas kravas ir saistītas ar koksnes produktiem - papīrmalka, 
          šķelda un granulas veido 100% no apstrādātajiem kravu veidiem.
        </p>
      </div>
    </div>
  );
  
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-center">WT Termināla kustības statistika (2024)</h1>
      
      <div className="mb-6">
        <div className="bg-gray-100 p-2 rounded-lg">
          <nav className="flex flex-wrap gap-2">
            <button 
              onClick={() => setActiveTab('summary')}
              className={`py-2 px-4 font-medium rounded ${activeTab === 'summary' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-200'}`}
            >
              Kopsavilkums
            </button>
            <button 
              onClick={() => setActiveTab('clients')}
              className={`py-2 px-4 font-medium rounded ${activeTab === 'clients' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-200'}`}
            >
              Klienti
            </button>
            <button 
              onClick={() => setActiveTab('monthly')}
              className={`py-2 px-4 font-medium rounded ${activeTab === 'monthly' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-200'}`}
            >
              Mēnešu statistika
            </button>
            <button 
              onClick={() => setActiveTab('cargo')}
              className={`py-2 px-4 font-medium rounded ${activeTab === 'cargo' ? 'bg-blue-600 text-white' : 'bg-white hover:bg-gray-200'}`}
            >
              Kravu veidi
            </button>
          </nav>
        </div>
      </div>
      
      <div>
        {activeTab === 'summary' && renderSummary()}
        {activeTab === 'clients' && renderClientStats()}
        {activeTab === 'monthly' && renderMonthlyStats()}
        {activeTab === 'cargo' && renderCargoStats()}
      </div>
      
      <div className="mt-8 pt-4 border-t border-gray-200 text-sm text-gray-500 text-center">
        <p>Statistika apkopota no 12 mēnešu datiem (2024. gads)</p>
        <p>WT Termināla statistika</p>
      </div>
    </div>
  );
};

export default TerminalStatistics;