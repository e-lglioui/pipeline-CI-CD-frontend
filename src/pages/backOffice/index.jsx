import { MainLayout } from '../../components/layout/dashoard/MainLayout';
import { DashboardHeader } from '../../components/common/Dashboard/header';

const Dashboard = () => {

  return (
    <MainLayout>
      <DashboardHeader title="Dashboard" subtitle="Welcome back to your dashboard" />
    </MainLayout>
  )
}

export default Dashboard