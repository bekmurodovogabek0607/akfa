import Image from 'next/image'

import style from './style.module.scss'
import Container from './Container'
import Link from 'next/link'
import { AppstoreOutlined, MailOutlined, SettingOutlined ,HomeOutlined ,PieChartOutlined,SnippetsOutlined,PlusSquareOutlined,ShoppingCartOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
type MenuItem = Required<MenuProps>['items'][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href='/'>Bosh sahifa</Link>, 'sub1', <HomeOutlined />),
  getItem('Mening buyurmalarim', 'sub5',<SnippetsOutlined />),
  getItem("Buyurtma olish", 'sub7', <PlusSquareOutlined />, [
    getItem('Eshiklar', '71'),
    getItem(<Link href={'/deraza/styles'}>Derazalar</Link>, '72'),
  ]), 
  getItem('Savat', 'sub8',<ShoppingCartOutlined />),
  getItem("Yangi Dizayn qo'shish", 'sub2', <AppstoreOutlined />, [
    getItem('Eshiklar', '5'),
    getItem(<Link href={'/allderaza/allstyles'}>Derazalar</Link>, '6'),
  ]), 
  getItem('Hisobot', 'sub6', <PieChartOutlined />),
  getItem('Sozlamalar', 'sub4', <SettingOutlined />, [
    getItem('Eshik Sozlamalari', '9'),
    getItem('Deraza Sozlamalari', '10'),
    getItem('Tariflar', '10'),
   ]),
 
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4','sub5','sub6','sub7','sub8'];
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  };
  return (
    <Container>
      <div className={style['Navbar']}>
        <div>
          <Image src={'/images/akfa.png'} height={50} width={150} />

        </div>
        <div>
          <i style={{ fontSize: '20px', fontWeight: "bold", cursor: 'pointer' }} onClick={showDrawer} className="fa-solid fa-bars"></i>
        </div>

      </div>

      <Drawer title={<Image src={'/images/akfa.png'} height={30} width={100} />} placement="right" onClose={onClose} open={open}>
        <Menu
          mode="inline"
          openKeys={openKeys}
          onOpenChange={onOpenChange}
          style={{ width: '100%' }}
          items={items}
        />
      </Drawer>
    </Container>

  )
}

export default Navbar