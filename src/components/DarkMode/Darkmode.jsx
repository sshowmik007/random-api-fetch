import React from "react";
import { useEffect, useState } from "react";
import Buttons from "./Buttons";

const Darkmode = () => {
  return (
    <section className="min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100 selection:bg-purple-900 selection:text-white">
      <Buttons />

      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center space-y-3">
          <h2 className="text-4xl font-semibold ">
            Lets Build a Dark Mode Page
          </h2>
          <h5 className="text-2xl pb-5">Lets Talk About Tailwind CSS</h5>
        </div>
        <p className="mb-3 font-medium text-gray-600 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:mr-3 first-letter:float-left">
          Tailwind CSS is a utility-based CSS framework that provides a
          low-level styling foundation for your web projects. It is designed to
          be used as a starting point for your own custom styles, rather than as
          a framework that you build your styles on top of. Instead of providing
          pre-designed UI components like buttons and cards, Tailwind CSS
          provides a set of utility classes that you can use to style your HTML
          elements directly. This approach allows you to have a lot of
          flexibility and control over the design of your website, and makes it
          easy to make global styling changes by simply modifying your utility
          classes. Some benefits of using Tailwind CSS include:
        </p>
        <b></b>
        <p className="mb-3 font-medium text-gray-600 dark:text-gray-400 ">
          It's easy to get started with, because you only need to add a few
          lines of CSS to your project to start using it. It's lightweight,
          because it only includes the utility classes that you actually use in
          your project. It promotes a consistent design style, because it
          encourages you to use a shared set of utility classes throughout your
          project. It's highly customizable, because you can modify the utility
          classes to fit your specific design needs.
        </p>
        <div>
          <ul class="space-y-3   list-disc list-inside text-gray-500 dark:text-gray-400 pl-8">
            <li className="">
              Utility classes: Tailwind CSS provides a wide range of utility
              classes that you can use to style your HTML elements. These
              utility classes are designed to be simple and easy to understand,
              and are based on the idea of "single responsibility" – each class
              is responsible for styling one specific aspect of an element, such
              as its font size, margin, background color, or text alignment.
            </li>
            <li>
              {" "}
              Low-level styling: Because Tailwind CSS provides a large number of
              low-level utility classes, it allows you to style your elements
              very granularly and directly. For example, instead of using a
              pre-designed button component, you can use utility classes to
              style an element to look and behave exactly the way you want it
              to. This approach gives you a lot of flexibility and control over
              the design of your website.{" "}
            </li>
            <li>
              Responsive design: Tailwind CSS includes utility classes that
              allow you to easily apply styles based on the size of the
              viewport. For example, you can use utility classes to specify
              different font sizes or widths for different screen sizes. This
              makes it easy to create responsive layouts that look good on all
              devices.
            </li>
            <li>
              Customization: Tailwind CSS is designed to be highly customizable.
              You can modify the default styles and add your own utility classes
              to fit your specific design needs. You can also customize the set
              of utility classes that are included in your project, which makes
              it easy to keep the CSS file size small.
            </li>
            <li>
              Workflow: To use Tailwind CSS in your project, you'll need to
              include the CSS file in your HTML, and then add the appropriate
              utility classes to your HTML elements. You can do this manually,
              or you can use a tool like PostCSS to process your CSS and
              automatically add the utility classes for you. Once you've set up
              Tailwind CSS, you can start styling your elements using the
              utility classes, and your design will come together quickly and
              easily.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Darkmode;
