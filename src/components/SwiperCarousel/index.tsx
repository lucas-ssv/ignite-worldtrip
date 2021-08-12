import { Box } from "@chakra-ui/react";

import styles from "./swiper.module.scss";
import { SwiperSection } from "./SwiperSection";

export function SwiperCarousel() {
  return (
    <Box
      className={styles.swipperWrapper}
      w="100%"
      maxWidth={1480}
      mx="auto"
      my="12"
    >
      <SwiperSection />
    </Box>
  );
}
