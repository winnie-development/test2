import {
  ChakraProvider,
  Grid,
  SimpleGrid,
  extendTheme,
  useDisclosure,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import NavigationBar from "./containers/Navbar/Design-one/navbar"
import CardW from "./components/Cards"
import AuthForm from "./containers/Login-Register/login-register"
import Footer from "./containers/Footer/Design-one"
import { FaBong } from "react-icons/fa"
import CollapsibleSidebar from "./components/Sidebar/c-ui"
import WithImageBackground from "./components/Heroes/With-Image-Background"
import WithSignUp from "./components/Heroes/With-Sign-Up"

export const theme = extendTheme({
  fonts: {
    body: `'Bebas Neue', sans-serif`
  }
});

const buttonProps = {
  variant: 'outline',
  style: { borderRadius: '20px' },
};


export const App = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <ChakraProvider theme={theme}>
        <NavigationBar buttons={[
          { label: 'SEARCH', onClick: () => console.log('one') },
          { label: 'ACCOUNT', onClick: () => console.log('two') },
          { label: 'BAG', onClick: () => console.log('two') }
        ]} />
        <CollapsibleSidebar />
        <SimpleGrid spacing="40px" columns={3} p="5%">
          <CardW heading="test" imageSrc="one" hasModal={true} />
          <CardW heading="test" imageSrc="one" hasModal={true} />
          <CardW heading="test" imageSrc="one" hasModal={true} />
        </SimpleGrid>
        <WithImageBackground
          text="Welcome to our Beautiful Life Website"
          buttonText="Explore Now"
          buttonProps={buttonProps}
          image="https://bit.ly/dan-abramov"
        />
        <WithSignUp
          title="Welcome to My Website"
          subtext="Explore the amazing features of our platform."
          imageUrl="https://bit.ly/dan-abramov"
          showDivider={true}

        />
        <Footer columns={[
          {
            header: {
              title: 'About Us',
            },
            rows: [
              {
                title: 'Our story',
                routeTo: '/our-story',
                icon: FaBong
              },
              {
                title: 'Careers',
              },
              {
                title: 'Why company',
              },
            ],
          },
          {
            header: {
              title: 'Product',
            },
            rows: [
              {
                title: "How it works",
                routeTo: '/how-it-works',
                icon: FaBong
              },
              {
                title: 'Pricing',
              },
              {
                title: 'Case studies',
              },
            ],
          },
          {
            header: {
              title: 'Resources',
            },
            rows: [
              {
                title: 'Resources',
              },
              {
                title: 'Terms of service',
              },
            ],
          },
          {
            header: {
              title: 'Legal',
            },
            rows: [
              {
                title: 'Terms & conditions',
              },
              {
                title: 'Privacy policy',
              },
              {
                title: 'License',
              },
            ],
          },

        ]} />
        <AuthForm isLogin={isOpen} onToggle={onToggle} onForgotPassword={() => console.log('wut')} />
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
      </ChakraProvider>
    </>
  )
}
