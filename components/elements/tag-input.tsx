'use client';

import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';

import { motion } from 'framer-motion';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

import { cn } from '@/lib/utils';

import Icon from '../ui/icon';
import Input from '../ui/input';
import Label from '../ui/label';

interface Tag {
  id: string;
  text: string;
}

interface Option {
  text: string;
  icon: keyof typeof dynamicIconImports;
}

const options: Option[] = [
  { text: 'Music', icon: 'music' },
  { text: 'Reading', icon: 'book-open' },
  { text: 'Gaming', icon: 'gamepad-2' },
  { text: 'Travel', icon: 'plane' },
  { text: 'Movies', icon: 'film' },
  { text: 'Art', icon: 'palette' },
  { text: 'Photography', icon: 'camera' },
  { text: 'Cooking', icon: 'utensils-crossed' },
  { text: 'Dancing', icon: 'music-2' },
  { text: 'Sport', icon: 'dumbbell' },
];

const TagInput: React.FC = () => {
  const [tags, setTags] = useState<Tag[]>([]);
  const [input, setInput] = useState<string>('');
  const [filteredOptions, setFilteredOptions] = useState<Option[]>([]);
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(0);
  const [isOptionsOpen, setIsOptionsOpen] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const optionRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const filtered = input
      ? options.filter((option) =>
          option.text.toLowerCase().includes(input.toLowerCase())
        )
      : options;
    setFilteredOptions(filtered);
    setActiveOptionIndex(0);
  }, [input]);

  // Scroll to active option
  useEffect(() => {
    if (isOptionsOpen && optionRefs.current[activeOptionIndex]) {
      optionRefs.current[activeOptionIndex]?.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
      });
    }
  }, [activeOptionIndex, isOptionsOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    setIsOptionsOpen(true);
  };

  const handleInputKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (
        filteredOptions.length > 0 &&
        !tags.find(
          (tag) => tag.text === filteredOptions[activeOptionIndex].text
        )
      ) {
        addTag(filteredOptions[activeOptionIndex].text);
      }
    } else if (e.key === 'ArrowDown') {
      setActiveOptionIndex((prev) => (prev + 1) % filteredOptions.length);
    } else if (e.key === 'ArrowUp') {
      setActiveOptionIndex(
        (prev) => (prev - 1 + filteredOptions.length) % filteredOptions.length
      );
    }
  };

  const handleChevronClick = () => {
    setIsOptionsOpen(!isOptionsOpen);
  };

  const addTag = useCallback((text: string) => {
    const newTag: Tag = {
      id: Date.now().toString(),
      text,
    };
    setTags((prevTags) => [...prevTags, newTag]);
    setInput('');
  }, []);

  const removeTag = (idToRemove: string) => {
    setTags(tags.filter((tag) => tag.id !== idToRemove));
  };

  const handleTagSelection = (optionText: string) => {
    if (!tags.find((tag) => tag.text === optionText)) {
      addTag(optionText);
    }
    inputRef.current?.focus();
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.8, duration: 0.5 }}
      className='relative space-y-2'
    >
      <Label htmlFor='tags'>Input with tags</Label>
      <motion.div
        layout
        className='flex w-96 max-w-full flex-wrap items-center gap-2 rounded-lg border border-border bg-background p-2 px-3 py-2 text-sm text-foreground'
      >
        {tags.map((tag) => (
          <motion.button
            layout
            key={tag.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            whileHover={{ scale: 1.05 }}
            className='custom-transition rounded bg-muted px-2 py-1 text-xs text-muted-foreground hover:cursor-pointer'
            onClick={() => removeTag(tag.id)}
          >
            <span>
              {tag.text} <span> &times;</span>{' '}
            </span>
          </motion.button>
        ))}
        <div className='relative w-full'>
          <Input
            id='tags'
            ref={inputRef}
            type='text'
            value={input}
            onChange={handleInputChange}
            onKeyDown={handleInputKeyDown}
            placeholder='Add a tag...'
          />
          <Icon
            name={isOptionsOpen ? 'chevron-up' : 'chevron-down'}
            size='20'
            role='button'
            tabIndex={0}
            onClick={handleChevronClick}
            className='absolute right-1 top-[0.42rem] z-10 cursor-pointer text-muted-foreground transition-transform hover:text-foreground'
          />
        </div>
      </motion.div>
      {isOptionsOpen && (
        <ul className='remove-scrollbar mt-1 max-h-[5.3rem] w-96 max-w-full space-y-1 overflow-y-auto rounded-lg border bg-background p-2 shadow-lg'>
          {filteredOptions.map((option, index) => (
            <li
              key={option.text}
              ref={(el) => {
                optionRefs.current[index] = el;
              }}
              className='custom-transition cursor-pointer'
            >
              <button
                type='button'
                className={cn(
                  index === activeOptionIndex
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground hover:bg-muted hover:text-muted-foreground',
                  'w-full rounded-md border border-transparent px-4 py-2 text-left'
                )}
                onClick={() => handleTagSelection(option.text)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTagSelection(option.text);
                  }
                }}
              >
                <div className='flex items-center gap-2 space-x-2 text-xs'>
                  <Icon
                    name={option.icon}
                    size='14'
                    className='h-4 w-4 text-muted-foreground'
                  />
                  {option.text}
                </div>
              </button>
            </li>
          ))}
          {!filteredOptions.length && (
            <li className='flex flex-col items-center gap-2 px-4 py-2'>
              <Icon name='search' className='h-4 w-4 text-muted-foreground' />
              <p className='mt-2 text-xs text-muted-foreground'>
                Sorry, We couldn`t find any results.
              </p>
            </li>
          )}
        </ul>
      )}
    </motion.div>
  );
};

export default TagInput;
