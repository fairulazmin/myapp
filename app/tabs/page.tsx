"use client";

import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const TabsPage = () => {
  return (
    <div className="container">
      <h2 className="text-2xl font-semibold">Tabs Page</h2>
      <Tabs className="bg-blue-400">
        <TabsList>
          <TabsTrigger value="Internal">Internal</TabsTrigger>
          <TabsTrigger value="External">External</TabsTrigger>
        </TabsList>
        <div className="bg-red-300 h-20"></div>
        <TabsContent value="Internal" className="bg-yellow-400">
          <div className="flex items-center space-x-3">
            <Label>Equipment</Label>
            <Input />
          </div>
        </TabsContent>
        <div className="bg-red-300 h-20"></div>
        <h2>Hello</h2>
        <TabsContent value="External" className="bg-indigo-600-400">
          <div className="flex items-center space-x-3">
            <Label>Calibration</Label>
            <Input />
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TabsPage;
