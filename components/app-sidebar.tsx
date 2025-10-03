'use client';

import * as React from 'react';
import { Home, Clock, Star, Gamepad2 } from 'lucide-react';

import { NavMain } from '@/components/nav-main';
import { AppLogo } from '@/components/app-logo';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from '@/components/ui/sidebar';

const data = {
  navMain: [
    {
      title: 'Gry',
      url: '/',
      icon: Home,
      isActive: true,
      items: [
        {
          title: 'Kółko i krzyżyk',
          url: '/games/tic-tac-toe',
        },
        {
          title: 'Memory',
          url: '/games/tic-tac-toe/memory',
        },
      ],
    },
  ],
  projects: [
    {
      name: 'Popularne gry',
      url: '#',
      icon: Star,
    },
    {
      name: 'Nowe gry',
      url: '#',
      icon: Clock,
    },
    {
      name: 'Gry losowe',
      url: '#',
      icon: Gamepad2,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <AppLogo />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>

      <SidebarRail />
    </Sidebar>
  );
}
