import React, { useState } from 'react'
import { ChatTeardropDots } from 'phosphor-react';
import { Popover } from '@headlessui/react'
import { WidgetForm } from './WidgetForm';

export function Widget() {
    return (
        <Popover className='absolute bottom-5 right-5 flex flex-col items-end'>
            <Popover.Panel><WidgetForm/></Popover.Panel>
            <Popover.Button className='bg-brand-default rounded-full px-3 h-12 text-white flex items-center group'>
                <ChatTeardropDots className='w-6 h-6'/>
                <span className='max-w-0 overflow-hidden transition-all duration-500 ease-linear group-hover:max-w-xs'>
                    <span className='pl-2'></span>
                    Feedback
                </span>
            </Popover.Button>
        </Popover>
    )
}