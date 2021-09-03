import 'react-bootstrap-drawer/lib/style.css'
import React, { useState } from 'react'
import {
	Collapse,
} from 'react-bootstrap';
import { Drawer } from 'react-bootstrap-drawer'

const SideMenu = ({ props, menuLinks }) => {
  const [open, setOpen] = useState(false)

  const handleToggle = () => setOpen(!open)

  return (
    <Drawer {...props}>
      <Drawer.Toggle onClick={handleToggle} />

      <Collapse in={open}>
        <Drawer.Overflow>
          <Drawer.ToC>
          <Drawer.Header href="/">Home</Drawer.Header>
            <Drawer.Nav>
              {menuLinks.map(object => (
                <Drawer.Item href={object.link}>{object.name}</Drawer.Item>
              ))}
            </Drawer.Nav>
          </Drawer.ToC>
        </Drawer.Overflow>
      </Collapse>
    </Drawer>
  )
}

export default SideMenu
