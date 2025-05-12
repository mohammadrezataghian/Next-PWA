"use client"

import * as React from 'react';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { AppProvider, type Navigation } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import NoteAddIcon from '@mui/icons-material/NoteAdd';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { PageContainer } from '@toolpad/core/PageContainer';
import { Grid } from '@mui/material';
import Dashboard from './_components/Dashboard';
import MakeRequest from './_components/makeRequest';
import SavedRequests from './_components/SavedRequests';
import SeeRequests from './_components/SeeRequests';
import Logo from "@/public/icons/icon-192x192.png";

const NAVIGATION: Navigation = [
  // {
  //   kind: 'header',
  //   title: 'Main items',
  // },
  {
    segment: 'Profile',
    title: 'اطلاعات حساب',
    icon: <DashboardIcon />,
  },
  {
    segment: 'makeRequest',
    title: 'ایجاد درخواست',
    icon: <NoteAddIcon />,
  },
  // {
  //   kind: 'divider',
  // },
  // {
  //   kind: 'header',
  //   title: 'Analytics',
  // },
  {
    segment: 'savedRequests',
    title: 'درخواست های ذخیره شده',
    icon: <BookmarkAddIcon />,
  },
  {
    segment: 'seeRequests',
    title: 'مشاهده درخواست های ایجاد شده',
    icon: <VisibilityIcon />,
  },
];

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 580,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
});

interface DemoProps {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window?: () => Window;
}

const page = (props: DemoProps) => {

  const { window } = props;

  const router = useDemoRouter('/dashboard');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;
  
  function SidebarFooter() {
    return (
      <Typography
        variant="caption"
        sx={{ m: 1, whiteSpace: 'nowrap', overflow: 'hidden' }}
      >
        <div className='flex items-center gap-1'>
            <span>2025 محمدرضا تقیان</span>
            {/* <AiOutlineTrademarkCircle className='text-lg'/> */}
        </div>
      </Typography>
    );
  }

  return (
    <>
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      window={demoWindow}
      branding={{title: 'حساب کاربری', logo: <img className='ml-2' src={Logo.src} alt="پروژه وب اپ تقیان" />}}
    >
      <DashboardLayout
      slots={{
        sidebarFooter: SidebarFooter,
      }}
      sx={{
        '& .MuiDrawer-root': {
          left: 'auto !important',
          right: 0,
        },
        '& .MuiDrawer-paper': {
          left: 'auto !important',
          right: 0,
        },
        '& .MuiAppBar-root': {
          left: 0,
          right: 'auto',
        },
        '& .MuiToolbar-root': {
          justifyContent: 'flex-end',
        },
      }}
      >
        {router.pathname === '/' && (
        <PageContainer>
          <Grid container spacing={1} className='font-bold text-lg'>
             hi reza  
          </Grid>
        </PageContainer>
      )}

      {router.pathname === '/Profile' && ( 
      <PageContainer>
        <Dashboard/>
      </PageContainer>
)}

      {router.pathname === '/makeRequest' && (
        <PageContainer>
          <MakeRequest/>
        </PageContainer>
      )}

      {router.pathname === '/savedRequests' && (
        <PageContainer>
          <SavedRequests/>
        </PageContainer>
      )}

      {router.pathname === '/seeRequests' && (
        <PageContainer>
          <SeeRequests/>
        </PageContainer>
      )}
    
      </DashboardLayout>
    </AppProvider>
    </>
  )
}

export default page