// import { Button, Grid, Typography } from "@mui/material";
// import React from "react";
// import { Link } from "react-alice-carousel";

// const Footer = () => {
//   return (
//     <div>
//       <Grid
//         className="bg-black text-white text-center mt-10"
//         container
//         sx={{ bgcolor: "red", color: "#E5E4E2", py: 3 }}
//       >
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Company
//             <div>
//               <Button className="pb-5" variant="h6" gutterBottom>
//                 About
//               </Button>
//               <div>
//                 <Button className="pb-5" variant="h6" gutterBottom>
//                   Blog
//                 </Button>
//                 <div>
//                   <Button className="pb-5" variant="h6" gutterBottom>
//                     Press
//                   </Button>
//                   <div>
//                     <Button className="pb-5" variant="h6" gutterBottom>
//                       Partners
//                     </Button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Typography>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Solutions
//             <div>
//               <Button className="pb-5" variant="h6" gutterBottom>
//                 Marketing
//               </Button>
//               <div>
//                 <Button className="pb-5" variant="h6" gutterBottom>
//                   Analytics
//                 </Button>
//                 <div>
//                   <Button className="pb-5" variant="h6" gutterBottom>
//                     Commerce
//                   </Button>
//                   <div>
//                     <Button className="pb-5" variant="h6" gutterBottom>
//                       Insights
//                     </Button>
//                     <div>
//                       <Button className="pb-5" variant="h6" gutterBottom>
//                         Support
//                       </Button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </Typography>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Documentation
//             <div>
//               <Button className="pb-5" variant="h6" gutterBottom>
//                 Guides
//               </Button>
//               <div>
//                 <Button className="pb-5" variant="h6" gutterBottom>
//                   API Status
//                 </Button>
//               </div>
//             </div>
//           </Typography>
//         </Grid>

//         <Grid item xs={12} sm={6} md={3}>
//           <Typography className="pb-5" variant="h6">
//             Legal
//             <div>
//               <Button className="pb-5" variant="h6" gutterBottom>
//                 Claims
//               </Button>
//               <div>
//                 <Button className="pb-5" variant="h6" gutterBottom>
//                   Privacy
//                 </Button>
//                 <div>
//                   <Button className="pb-5" variant="h6" gutterBottom>
//                     Terms
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </Typography>
//         </Grid>

//         <Grid className="pt-20" item xs={12}>
//           <Typography variant="body2" component="p" align="center">
//             &copy; 2023 My Comapany. All rights reserved.
//           </Typography>
//           <Typography variant="body2" component="p" align="center">
//             Made with love by Me.
//           </Typography>
//           <Typography variant="body2" component="p" align="center">
//             Icons made by{" "}
//             <Link
//               href="https://www.freepik.com"
//               color="inherit"
//               underline="always"
//             >
//               Freepik
//             </Link>{" "}
//             from{" "}
//             <Link
//               href="https://www.flaticon.com/"
//               color="inherit"
//               underline="always"
//             >
//               www.flaticon.com
//             </Link>
//           </Typography>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Footer;











// import { Button, Grid, Typography, Link } from "@mui/material";
// import React from "react";

// const Footer = () => {
//   return (
//     <div>
//       <Grid
//         className="text-center mt-10"
//         container
//         sx={{
//           bgcolor: "#DC2625", // Background color
//           color: "#E5E4E2", // Text color
//           py: 2, // Padding for the entire footer
//         }}
//       >
//         {/* Company Section */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom>
//             Company
//           </Typography>
//           <Button color="inherit">About</Button>
//           <Button color="inherit">Blog</Button>
//           <Button color="inherit">Press</Button>
//         </Grid>

//         {/* Solutions Section */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom>
//             Solutions
//           </Typography>
//           <Button color="inherit">Marketing</Button>
//           <Button color="inherit">Analytics</Button>
//           <Button color="inherit">Commerce</Button>
//         </Grid>

//         {/* Documentation Section */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom>
//             Documentation
//           </Typography>
//           <Button color="inherit">Guides</Button>
//           <Button color="inherit">API Status</Button>
//         </Grid>

//         {/* Legal Section */}
//         <Grid item xs={12} sm={6} md={3}>
//           <Typography variant="h6" gutterBottom>
//             Legal
//           </Typography>
//           <Button color="inherit">Claims</Button>
//           <Button color="inherit">Privacy</Button>
//           <Button color="inherit">Terms</Button>
//         </Grid>

//         {/* Footer Bottom Section */}
//         <Grid
//           item
//           xs={12}
//           sx={{
//             mt: 2, // Reduced top margin
//           }}
//         >
//           <Typography
//             variant="body2"
//             align="center"
//             sx={{
//               mb: 0.5, // Reduced margin-bottom
//             }}
//           >
//             &copy; 2023 My Company. All rights reserved.
//           </Typography>
//           <Typography
//             variant="body2"
//             align="center"
//             sx={{
//               mb: 0.5, // Reduced margin-bottom
//             }}
//           >
//             Made with love by Me.
//           </Typography>
//           <Typography
//             variant="body2"
//             align="center"
//             sx={{
//               mb: 0, // No bottom margin
//             }}
//           >
//             Icons made by{" "}
//             <Link
//               href="https://www.freepik.com"
//               color="inherit"
//               underline="always"
//             >
//               Freepik
//             </Link>{" "}
//             from{" "}
//             <Link
//               href="https://www.flaticon.com/"
//               color="inherit"
//               underline="always"
//             >
//               www.flaticon.com
//             </Link>
//           </Typography>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Footer;












import { Button, Grid, Typography, Link } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid
        className="text-center mt-10"
        container
        sx={{
          bgcolor: "#DC2625", // Background color
          color: "#E5E4E2", // Text color
          py: 2, // Padding for the entire footer
        }}
      >
        {/* About Us Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            About Us
          </Typography>
          <Button color="inherit">Our Story</Button>
          <Button color="inherit">Careers</Button>
          <Button color="inherit">Contact Us</Button>
        </Grid>

        {/* Customer Service Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Customer Service
          </Typography>
          <Button color="inherit">FAQ</Button>
          <Button color="inherit">Returns</Button>
          <Button color="inherit">Support</Button>
        </Grid>

        {/* Shop Categories Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Shop Categories
          </Typography>
          <Button color="inherit">Clothing</Button>
          <Button color="inherit">Accessories</Button>
          <Button color="inherit">Electronics</Button>
        </Grid>

        {/* Legal Section */}
        <Grid item xs={12} sm={6} md={3}>
          <Typography variant="h6" gutterBottom>
            Legal
          </Typography>
          <Button color="inherit">Privacy Policy</Button>
          <Button color="inherit">Terms & Conditions</Button>
        </Grid>

        {/* Footer Bottom Section */}
        <Grid
          item
          xs={12}
          sx={{
            mt: 2, // Reduced top margin
          }}
        >
          <Typography
            variant="body2"
            align="center"
            sx={{
              mb: 0.5, // Reduced margin-bottom
            }}
          >
            &copy; 2023 E-Commerce Store. All rights reserved.
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              mb: 0.5, // Reduced margin-bottom
            }}
          >
            Built with love by the Me.
          </Typography>
          <Typography
            variant="body2"
            align="center"
            sx={{
              mb: 0, // No bottom margin
            }}
          >
            Give suggestions at {" "}
            <Link
              href="ashankar_be22@thapar.edu"
              color="inherit"
              underline="always"
            >
              ashankar_be22@thapar.edu
            </Link>{" "}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
