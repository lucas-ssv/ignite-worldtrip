import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/core";

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import { SwiperSlideLink } from "./SwiperSlideLink";

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

export function SwiperSection() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <SwiperSlideLink
          href="/north-america"
          title="América do Norte"
          description="A América do Norte é um subcontinente que compreende a porção setentrional do continente americano"
          image="https://images.unsplash.com/photo-1589871090211-7f2efeec05b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&h=450&q=80"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideLink
          href="/south-america"
          title="América do Sul"
          description="A América do Sul é um continente que compreende a porção meridional da América"
          image="https://images.unsplash.com/photo-1519761112046-3abcd5a21728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&h=450&q=80"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideLink
          href="/asia"
          title="Ásia"
          description="A Ásia é o maior dos continentes, tanto em área como em população"
          image="https://images.unsplash.com/photo-1618568270494-951a3ad8e4e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&h=450&q=80"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideLink
          href="/africa"
          title="África"
          description="África é um dos seis continentes do mundo, sendo o terceiro maior em extensão territorial"
          image="https://images.unsplash.com/photo-1511185307590-3c29c11275ca?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&h=450&q=80"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideLink
          href="/europe"
          title="Europa"
          description="O continente mais antigo"
          image="https://images.unsplash.com/photo-1491557345352-5929e343eb89?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&h=450&q=80"
        />
      </SwiperSlide>
      <SwiperSlide>
        <SwiperSlideLink
          href="/oceania"
          title="Oceania"
          description="Oceania ou Oceânia é uma região geográfica composta por vários grupos de ilhas do oceano Pacífico (Polinésia, Melanésia e Micronésia)"
          image="https://images.unsplash.com/photo-1589330273594-fade1ee91647?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&h=450&q=80"
        />
      </SwiperSlide>
    </Swiper>
  );
}
