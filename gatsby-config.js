module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'react-ecomm-app',
    menuLinks: {
      home: { name: 'Home', links: [{ name: 'Home', link: '/' }] },

      labels: {
        name: 'Labels',
        links: [
          { name: 'Shipping Labels', link: '/shippingLabels' },
          { name: 'Create Product Labels', link: '/createLabels' },
          { name: 'Create Shoe Labels', link: '/shoeLabels' },
          { name: 'Create Scan Labels', link: '/scanLabels' }
        ]
      },
      products: {
        name: 'Products',
        links: [
          { name: 'Search For A Product', link: '/productSearch' },
          { name: 'Tax & Harm Codes', link: '/codes' },
          { name: 'Altered Products List', link: '/altered' },
          { name: 'UK Inventory Suggestions', link: '/ukSuggests' },
          { name: 'Legacy UK Inventory Suggestions', link: '/upload' },
          { name: 'Order Scanner', link: '/orderScanner' }
        ]
      },
      customers: {
        name: 'Customers',
        links: [{ name: 'Search For A Customer', link: '/customerSearch' }]
      },
      manufacturing: {
        name: 'Manufacturing',
        links: [
          { name: 'Current Bills Of Material', link: '/bills' },
          { name: 'Raw Goods', link: '/rawGoodsList' },
          {
            name: 'Create Bill Of Materials',
            link: '/createBillOfMaterials'
          },
          { name: 'Add Raw Goods', link: '/rawGoods' },
          { name: 'Add A Vendor', link: '/vendors' }
        ]
      },

      adminPortal: {
        name: 'Admin Portal',
        links: [
          { name: 'Settings', link: '/settings' },
          { name: 'Users', link: '/users' },
          { name: 'Create User', link: '/createUser' },
          { name: 'Sales', link: '/sales' }
        ]
      },
      employeePortal: {
        name: 'Employee Portal',
        links: [{ name: 'User Profile', link: '/profile' }]
      }
    }
  },
  plugins: []
}
