"use client";

import { Fragment, useEffect, useState } from "react";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Avatar, Button, Menu,MenuItem } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import { Close } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import AuthModal from "../../Auth/AuthModal";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../../../State/Auth/Action";

const navigation = {
  categories: [
    {
      id: 'women',
      name: 'Clothes',
      featured: [
        {
          name: 'New Arrivals',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '/',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Tops', id:"top", href: `{women/clothing/tops}` },
            { name: 'Dresses', id:"women_dress", href: '#' },
            { name: 'Women Jeans', id: 'women_jeans' },
            { name: 'Lengha Choli', id: 'lengha_choli' },
            { name: 'Sweaters', id: 'sweater' },
            { name: 'T-Shirts', id: 't-shirt' },
            { name: 'Jackets', id: 'jacket' },
            { name: 'Gouns', id: 'gouns' },
            { name: 'Sarees', id: 'saree' },
            { name: 'Kurtas', id: 'kurtas' },
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: 'watch' },
            { name: 'Wallets', id: 'wallet' },
            { name: 'Bags', id: 'bag' },
            { name: 'Sunglasses', id: 'sunglasse' },
            { name: 'Hats', id: 'hat' },
            { name: 'Belts', id: 'belt' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Significant Other', id: '#' },
          ],
        },
      ],
    },
    {
      id: 'men',
      name: 'Staionary',
      featured: [
        {
          name: 'New Arrivals',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg',
          imageAlt: 'Drawstring top with elastic loop closure and textured interior padding.',
        },
        {
          name: 'Artwork Tees',
          id: '#',
          imageSrc: 'https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg',
          imageAlt:
            'Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt.',
        },
      ],
      sections: [
        {
          id: 'clothing',
          name: 'Clothing',
          items: [
            { name: 'Mens Kurtas', id: 'mens_kurta' },
            { name: 'Shirt', id: 'shirt' },
            { name: 'Men Jeans', id: 'men_jeans' },
            { name: 'Sweaters', id: '#' },
            { name: 'T-Shirts', id: 't-shirt' },
            { name: 'Jackets', id: '#' },
            { name: 'Activewear', id: '#' },
            
          ],
        },
        {
          id: 'accessories',
          name: 'Accessories',
          items: [
            { name: 'Watches', id: '#' },
            { name: 'Wallets', id: '#' },
            { name: 'Bags', id: '#' },
            { name: 'Sunglasses', id: '#' },
            { name: 'Hats', id: '#' },
            { name: 'Belts', id: '#' },
          ],
        },
        {
          id: 'brands',
          name: 'Brands',
          items: [
            { name: 'Re-Arranged', id: '#' },
            { name: 'Counterfeit', id: '#' },
            { name: 'Full Nelson', id: '#' },
            { name: 'My Way', id: '#' },
          ],
        },
      ],
    },
  ],
  pages: [
    { name: 'Shops', id: '/' },
    { name: 'Contacts', id: '/' },
  ],
};

export default function Example() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const [openAuthModel, setOpenAuthModel] = useState(false);
  const [anchorEl, setAnchorE1] = useState(null);
  const openUserMenu = Boolean(anchorEl);
  const jwt = localStorage.getItem("jwt");
  const {auth}=useSelector(store=>store);
  const dispatch=useDispatch();
  const location=useLocation();

  const handleUserClick = (event) => {
    setAnchorE1(event.currentTarget);
  };
  const handleCloseUserMenu = (event) => {
    setAnchorE1(null);
  };
  const handleOpen = () => {
    setOpenAuthModel(true);
  };
  const handleClose = () => {
    setOpenAuthModel(false);
  };

  const handleCategoryClick = (category, section, item, closeMenu) => {
    navigate(`/${category.id}/${section.id}/${item.id}`);
    closeMenu();
  };

  useEffect(()=>{
    if(jwt){
      dispatch(getUser(jwt))
    }
  },[jwt,auth.jwt])

  useEffect(()=>{
    if(auth.user){
      handleClose()
    }
    if(location.pathname==="/login"|| location.pathname==="/register"){
      navigate(-1)
    }

  }, [auth.user])

  const handleLogout=()=>{
    dispatch(logout())
    handleCloseUserMenu()
    localStorage.clear();
  }

  return (
    <div className="bg-white">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black bg-opacity-25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-xs transform flex-col overflow-y-auto bg-white pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
              <div className="border-b border-gray-200">
                <TabList className="-mb-px flex space-x-8 px-4">
                  {navigation.categories.map((category) => (
                    <Tab
                      key={category.name}
                      className="flex-1 whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-base font-medium text-gray-900 data-[selected]:border-indigo-600 data-[selected]:text-indigo-600"
                    >
                      {category.name}
                    </Tab>
                  ))}
                </TabList>
              </div>
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel
                    key={category.name}
                    className="space-y-10 px-4 pb-8 pt-10"
                  >
                    <div className="grid grid-cols-2 gap-x-4">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative text-sm">
                          <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                            <img
                              alt={item.imageAlt}
                              src={item.imageSrc}
                              className="object-cover object-center"
                            />
                          </div>
                          <a
                            href={item.href}
                            className="mt-6 block font-medium text-gray-900"
                          >
                            <span
                              aria-hidden="true"
                              className="absolute inset-0 z-10"
                            />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                    {category.sections.map((section) => (
                      <div key={section.name}>
                        <p
                          id={`${category.id}-${section.id}-heading-mobile`}
                          className="font-medium text-gray-900"
                        >
                          {section.name}
                        </p>
                        <ul
                          role="list"
                          aria-labelledby={`${category.id}-${section.id}-heading-mobile`}
                          className="mt-6 flex flex-col space-y-6"
                        >
                          {section.items.map((item) => (
                            <li key={item.name} className="flow-root">
                              <a
                                href={item.href}
                                className="-m-2 block p-2 text-gray-500"
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a
                    href={page.href}
                    className="-m-2 block p-2 font-medium text-gray-900"
                  >
                    {page.name}
                  </a>
                </div>
              ))}
            </div>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6">
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Sign in
                </a>
              </div>
              <div className="flow-root">
                <a
                  href="#"
                  className="-m-2 block p-2 font-medium text-gray-900"
                >
                  Create account
                </a>
              </div>
            </div>

            <div className="border-t border-gray-200 px-4 py-6">
              <a href="#" className="-m-2 flex items-center p-2">
                <img
                  alt=""
                  src="https://tailwindui.com/img/flags/flag-canada.svg"
                  className="block h-auto w-5 flex-shrink-0"
                />
                <span className="ml-3 block text-base font-medium text-gray-900">
                  CAD
                </span>
                <span className="sr-only">, change currency</span>
              </a>
            </div>
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative bg-white z-50">
        <p className="flex h-10 items-center justify-center bg-red-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
        <span className="inline-block animate-marquee whitespace-nowrap">
          Welcome to CAMPUS MATE !! YOUR COLLEGE MATE !! </span>
        </p>

        <nav
          aria-label="Top"
          className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
        >
          <div className="border-b border-gray-200">
            <div className="flex h-16 items-center">
              <button
                type="button"
                onClick={() => setOpen(true)}
                className="rounded-md bg-white p-2 text-gray-400 lg:hidden"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open menu</span>
                <Bars3Icon aria-hidden="true" className="h-6 w-6" />
              </button>

              {/* Logo */}
              <div className="ml-4 flex lg:ml-0">
                <a href="#">
                  <span className="sr-only">Your Company</span>
                  <img
                    alt=""
                    src="data:image/png;base64,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"
                    className="h-10 w-10 mr-2free rounded-full"
                  />
                </a>
              </div>

              {/* Flyout menus */}
              <PopoverGroup className="hidden lg:ml-8 lg:block lg:self-stretch">
                <div className="flex h-full space-x-8">
                  {navigation.categories.map((category) => (
                    <Popover key={category.name} className="flex">
                      {({ open, close }) => (
                        <>
                          <PopoverButton className="relative z-10 flex items-center transition-colors duration-200 ease-out text-sm font-medium text-gray-700 ${open ? 'border-indigo-600 text-indigo-600' : 'border-transparent'} hover:text-gray-800">
                            {category.name}
                            <span className="absolute inset-x-0 -bottom-px h-0.5 transition ease-out duration-200 ${open ? 'bg-indigo-600' : 'bg-transparent'}" />
                          </PopoverButton>

                          <PopoverPanel className="absolute inset-x-0 top-full text-sm text-gray-500">
                            {/* Flyout content */}
                            <div
                              className="absolute inset-0 top-1/2 bg-white shadow"
                              aria-hidden="true"
                            />

                            <div className="relative bg-white">
                              <div className="mx-auto max-w-7xl px-8">
                                <div className="grid grid-cols-2 gap-y-10 gap-x-8 py-16">
                                  <div className="col-start-2 grid grid-cols-2 gap-x-8">
                                    {category.featured.map((item) => (
                                      <div
                                        key={item.name}
                                        className="group relative text-base sm:text-sm"
                                      >
                                        <div className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75">
                                          <img
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className="object-cover object-center"
                                          />
                                        </div>
                                        <a
                                          href={item.href}
                                          className="mt-6 block font-medium text-gray-900"
                                        >
                                          <span
                                            className="absolute inset-0 z-10"
                                            aria-hidden="true"
                                          />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                  <div className="row-start-1 grid grid-cols-3 gap-y-10 gap-x-8 text-sm">
                                    {category.sections.map((section) => (
                                      <div key={section.name}>
                                        <p
                                          id={`${section.name}-heading`}
                                          className="font-medium text-gray-900"
                                        >
                                          {section.name}
                                        </p>
                                        <ul
                                          aria-labelledby={`${section.name}-heading`}
                                          className="mt-6 space-y-6 sm:mt-4 sm:space-y-4"
                                        >
                                          {section.items.map((item) => (
                                            <li
                                              key={item.name}
                                              className="flex"
                                            >
                                              <a
                                                href={item.href}
                                                className="hover:text-gray-800"
                                                onClick={() =>
                                                  handleCategoryClick(
                                                    category,
                                                    section,
                                                    item,
                                                    close
                                                  )
                                                }
                                              >
                                                {item.name}
                                              </a>
                                            </li>
                                          ))}
                                        </ul>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </>
                      )}
                    </Popover>
                  ))}

                  {navigation.pages.map((page) => (
                    <a
                      key={page.name}
                      href={page.href}
                      className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      {page.name}
                    </a>
                  ))}
                </div>
              </PopoverGroup>

              <div className="ml-auto flex items-center">
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                  {auth.user?.firstName ? (
                    <div>
                      <Avatar
                        className="text-white"
                        onClick={handleUserClick}
                        aria-controls={openUserMenu ? "user-menu" : undefined}
                        aria-haspopup="true"
                        aria-expanded={openUserMenu ? "true" : undefined}
                        sx={{
                          bgcolor: "grey-20",
                          color: "red",
                          cursor: "pointer",
                        }}
                      >
                        {auth.user?.firstName[0].toUpperCase()}
                      </Avatar>

                      <Menu
                        id="user-menu"
                        anchorEl={anchorEl}
                        open={openUserMenu}
                        onClose={handleCloseUserMenu}
                        MenuListProps={{ "aria-labelledby": "user-button" }}
                      >
                        <MenuItem onClick={handleCloseUserMenu}>
                          Profile
                        </MenuItem>
                        <MenuItem onClick={() => navigate("/account/order")}>
                          My Orders
                        </MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </div>
                  ) : (
                    <Button
                      onClick={handleOpen}
                      className="text-sm font-medium text-gray-700 hover:text-gray-800"
                    >
                      Sign in
                    </Button>
                  )}
                </div>

                {/* Search */}
                <div className="flex lg:ml-6">
                  <p className="p-2 text-gray-400 hover:text-gray-500">
                    <span className="sr-only">Search</span>
                    <MagnifyingGlassIcon
                      aria-hidden="true"
                      className="h-6 w-6"
                    />
                  </p>
                </div>

                {/* Cart */}
                <div className="ml-4 flow-root lg:ml-6">
                  <Button className="group -m-2 flex items-center p-2">
                    <ShoppingBagIcon
                      aria-hidden="true"
                      className="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    />
                    <span className="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">
                      2
                    </span>
                    <span className="sr-only">items in cart, view bag</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <AuthModal handleClose={handleClose} open={openAuthModel}/>
    </div>
  );
}
