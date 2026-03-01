'use client';

import React, { useEffect, useRef } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import SectionTitle from '../SectionTitle';
import testimonialsData from '@/data/testimonials.json';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface Testimonial {
  quote: string;
  author: string;
  role?: string;
}

const TestimonialsSection: React.FC = () => {
  const swiperRef = useRef<HTMLDivElement>(null);
  const testimonials: Testimonial[] = testimonialsData;

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new SwiperType(swiperRef.current, {
        modules: [Pagination, Autoplay, EffectFade],
        effect: 'fade',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      });

      return () => {
        swiper.destroy();
      };
    }
  }, []);

  return (
    <section
      id="testimonials"
      aria-labelledby="testimonials-title"
      className="scroll-mt-20 lg:border-b dark:bg-gray-950"
    >
      <div className="container">
        <div className="lg:border-x">
          <SectionTitle id="testimonials-title" title="What clients say" />
          <div className="relative pt-24 pb-16 lg:py-10">
            <span className="text-9xl text-gray-300 dark:text-gray-700 absolute top-2 -left-1 lg:top-5 lg:left-5 font-heading">
              &quot;
            </span>
            <div ref={swiperRef} className="swiper not-prose lg:max-w-screen-md">
              <div className="swiper-wrapper">
                {testimonials.map((testimonial, index) => (
                  <article
                    key={index}
                    className="swiper-slide pb-10 lg:py-20 bg-white dark:bg-gray-950"
                  >
                    <blockquote className="grid gap-6">
                      <p className="text-2xl md:text-3xl lg:text-4xl text-gray-950 dark:text-gray-300 font-heading">
                        {testimonial.quote}
                      </p>
                      <div>
                        <cite className="text-xl font-medium text-gray-600 dark:text-gray-400 not-italic">
                          {testimonial.author}
                        </cite>
                        {testimonial.role && (
                          <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">{testimonial.role}</p>
                        )}
                      </div>
                    </blockquote>
                  </article>
                ))}
              </div>
              <div className="swiper-pagination pt-10 !-bottom-2"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
