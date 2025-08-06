"use client";

import React, { useState } from "react";
import { ChevronsUpDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { countries } from "@/constants";
import { ExpandingCards } from "../expending Card";

type Country = {
  code: string;
  flag: string;
  label: string;
};



const KonsultatsiyaForm = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>(countries[0]);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const regex = /^[A-Za-zА-Яа-яЁё\s]*$/;
    if (regex.test(e.target.value)) {
      setName(e.target.value);
    }
  };

  const formatPhone = (value: string): string => {
    const digits = value.replace(/\D/g, "").slice(0, 9);
    if (digits.length <= 2) return digits;
    if (digits.length <= 5)
      return `${digits.slice(0, 2)} ${digits.slice(2, 5)}`;
    if (digits.length <= 7)
      return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(
        5,
        7
      )}`;
    return `${digits.slice(0, 2)} ${digits.slice(2, 5)} ${digits.slice(
      5,
      7
    )} ${digits.slice(7, 9)}`;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value);
    setPhone(formatted);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert(
      `Ism: ${name}\nMamlakat: ${selectedCountry.label} (${selectedCountry.code})\nTelefon: ${phone}`
    );
    setName("");
    setPhone("");
    setSelectedCountry(countries[0]);
  };

  return (
   <>
   <div className="grid grid-cols-1 md:grid-cols-2 mt-50 gap-12 items-start justify-evenly">
   <ExpandingCards/>
    <div className="w-full max-w-xl ml-30 bg-[#f9f7f3] px-10 space-y-6 rounded-4xl min-h-[300px] py-8">
      <h1 className="text-black text-3xl font-bold">Bron Your Room</h1>
      <p className="text-black text-xl">
    
      </p>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={handleNameChange}
          className="w-full text-black px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#967851]"
          required
        />

        <div className="flex items-center space-x-2 w-full">
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[180px] justify-between text-black"
              >
                {selectedCountry.flag} {selectedCountry.label}
                <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[260px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search country..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>Iltimos tog'ri yoz</CommandEmpty>
                  <CommandGroup>
                    {countries.map((country) => (
                      <CommandItem
                        key={country.code}
                        value={country.label.toLowerCase()}
                        onSelect={() => {
                          setSelectedCountry(country);
                          setOpen(false);
                        }}
                      >
                        <span className="mr-2">{country.flag}</span>
                        {country.label} ({country.code})
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            selectedCountry.code === country.code
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>

          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={handlePhoneChange}
            maxLength={12}
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#967851] text-black"
            required
          />
        </div>
       

<h1 className="text-center border w-60 items-center justify-center mx-auto rounded-2xl">Select your room type</h1>
<div className="flex justify-between gap-4 pt-2">
  <button
    type="button"
    className="w-1/2 bg-[#967851] text-white py-3 rounded-lg hover:bg-[#7a613f] transition"
  >
 Superior Room
  </button>
  <button
    type="button"
    className="w-1/2 bg-[#a7a7a7] text-white py-3 rounded-lg hover:bg-[#8e8e8e] transition"
  >
   Deluxe Room
  </button>
   <button
    type="button"
    className="w-1/2 bg-[#967851] text-white py-3 rounded-lg hover:bg-[#8e8e8e] transition"
  >
   Family Room 
  </button>
</div>

        <button
          type="submit"
          className="bg-[#11b181] w-full h-13 text-white px-6 py-3 rounded-lg hover:bg-[#0e9570] transition font-semibold text-lg"
        >
        Bron
        </button>
      </form>
    </div>
    </div>
   </>
  );
};

export default KonsultatsiyaForm;
