import { Flex, Grid, GridItem, IconButton, VStack } from "@chakra-ui/react";
import React from "react";
import TitleHover from "../../../components/Text/Hover-Title";
import { IconType } from "react-icons";
import SubHeadingHover from "../../../components/Text/Hover-Subheading";
import SearchBar from "../../../components/SearchBar";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

interface RowProps {
  title: string;
  routeTo?: string;
  icon?: IconType;
}

interface ColumnsProps {
  header: RowProps;
  rows: RowProps[];
}

interface FooterProps {
  columns: ColumnsProps[];
}

const Footer: React.FC<FooterProps> = ({ columns }) => {
  return (

    <>
      <Grid
        templateRows='repeat(2, 1fr)'
        templateColumns={`repeat(6, 1fr)`}
        gap={4}
        p={8}
        pb={0}
        h="200"
      >
        <GridItem colSpan={4} rowSpan={2} >
          <Grid templateColumns='repeat(4, 1fr)' >
            {columns.map(column => (
              <GridItem w="100%" bg="transparent">
                <TitleHover title={column.header.title} />
                <VStack align="left" mt={2}>
                  {column.rows.map(row =>
                    <SubHeadingHover title={row.title} />
                  )}
                </VStack>
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem rowSpan={2} colSpan={2}>
          <SearchBar introText="The sun will set for you" placeholder="Enter your email" onSearch={(e) => console.log(e)} />
        </GridItem>
      </Grid>
      <Flex p={8} pt={0} justify="space-between" align="baseline">
        Your logo
        <Flex>
          <IconButton icon={<FaTwitter />} aria-label="twitter-icon-button" borderRadius="full" bg="transparent" />
          <IconButton icon={<FaFacebookF />} aria-label="facebook-icon-button" borderRadius="full" bg="transparent" />
          <IconButton icon={<FaInstagram />} aria-label="instagram-icon-button" borderRadius="full" bg="transparent" />
        </Flex>
      </Flex>
    </>
  );
};

export default Footer;
