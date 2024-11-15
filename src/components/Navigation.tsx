'use client'
import {useTranslations} from 'next-intl';
import React, { useState } from 'react';  
import LocaleSwitcher from './LocaleSwitcher';
import Logo from '../components/Logo'

export default function Navigation() {
  const t = useTranslations();
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="overflow-x-hidden bg-gray-50">
        <header className="py-4 md:py-6" x-data="{expanded: false}">
            <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between">
                    <div className="flex-shrink-0">
                        <Logo />
                    </div>
        
                    <div className="flex lg:hidden">
                        <button type="button" className="text-gray-900" onClick={() => setExpanded(!expanded)} aria-expanded={expanded}>
                            {
                                !expanded &&
                                (
                                <span x-show="!expanded" aria-hidden="true">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                </span>
                                )
                            }
                            {
                                expanded &&
                                <span x-show="expanded" aria-hidden="true">
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </span>
                                
                            }
                        </button>
                    </div>
        
                    <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                        <a href="#portfolio" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> {t('portfolio')} </a>
        
                        <a href="#about" title="" className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> {t('quemsoueu')} </a>

                        <LocaleSwitcher />w
                    </div>
        
                    <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                    </div>
                </div>
        
                {
                    expanded &&
                    <nav x-show="expanded">
                        <div className="px-1 py-8">
                            <div className="grid gap-y-7">
                                <a href="#portfolio" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> {t('portfolio')} </a>
            
                                <a href="#about" title="" className="flex items-center p-3 -m-3 text-base font-medium text-gray-900 transition-all duration-200 rounded-xl hover:bg-gray-50 focus:outline-none font-pj focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"> {t('quemsoueu')} </a>
                                
                                <LocaleSwitcher />
                            </div>
                        </div>
                    </nav>
                }
            </div>
        </header>
    </div>
  ); 
}
