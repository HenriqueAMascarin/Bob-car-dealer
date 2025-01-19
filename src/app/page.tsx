'use client';

import Button from '@/components/Button';
import Container from '@/components/Container';
import axios from 'axios';
import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';
import { redirect } from 'next/navigation';
import Form from 'next/form'

type MakesType =
  | {
    MakeId: number;
    MakeName: string;
    VehicleTypeId: number;
    VehicleTypeName: string;
  }[]
  | [];

type ResponseVehicleType = { data: { Results: [] } };

export default function Home() {
  const initialSelectValue = "initial";

  const [vehicleMakes, changeVehicleMakes] = useState<MakesType>([]);

  const [selectedVehicleMakeID, changeSelectedVehicleMakeID] = useState<string>(initialSelectValue);

  const arrayModelYears = useMemo(() => {
    const initialYear = 2015;
    const finalYear = new Date().getFullYear();
    let newArrayYears = [];

    for (let year = initialYear; year <= finalYear; year++) {
      newArrayYears.push(year);
    }

    return newArrayYears;
  }, []);

  const [selectedModelYear, changeSelectedModelYear] = useState<string>(initialSelectValue);

  useEffect(() => {
    axios
      .get('https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json')
      .then(({ data }: ResponseVehicleType) => {
        if (data?.Results) {
          changeVehicleMakes(data.Results);
        }
      });
  }, []);

  const isDisabledNextBtn = useMemo(() => (selectedVehicleMakeID == initialSelectValue || selectedModelYear == initialSelectValue), [selectedVehicleMakeID, selectedModelYear])

  function searchVehicle() {
    redirect(`result/${selectedVehicleMakeID}/${selectedModelYear}`);
  }

  return (
    <section>
      <Image
        src={'/images/car_image.jpg'}
        alt="Car image"
        width="1280"
        height="853"
        className="tw-mb-4 tw-max-h-[262px] tw-w-full tw-border-b-4 tw-border-customDarkBlue tw-object-cover tw-object-center"
      />

      <Container>
        <div className="tw-mb-4">
          <h1>
            BOB’S <span className="tw-block">CAR DEALER</span>
          </h1>
          <p className="tw-text-[20px] tw-font-bold tw-text-customWeakDarkBlue">
            Making your dream with cars.
          </p>
        </div>

        <div className="tw-mx-auto tw-w-full tw-max-w-[600px] tw-rounded-[10px] tw-bg-customDarkBlue tw-px-2 tw-py-4">
          <h2 className="tw-mb-4 tw-text-left tw-text-white">Search the best vehicle</h2>

          <Form action={searchVehicle}>
            <div className="tw-flex tw-flex-col tw-gap-4 md:tw-grid md:tw-grid-cols-4">

              <select name="vehicleMakes" id="vehicleMakes" defaultValue={initialSelectValue} className="tw-col-span-2 !tw-text-customDarkBlue" onChange={(event) => changeSelectedVehicleMakeID(event.target.value)}>
                <option value={initialSelectValue}>Select the vehicle make *</option>
                {vehicleMakes.map((children, keyChildren) => (
                  <option value={children.MakeId} key={keyChildren}>{children.MakeName}</option>
                ))}
              </select>

              <select name="modelYear" id="modelYear" defaultValue={initialSelectValue} className="tw-col-span-2 !tw-text-customDarkBlue" onChange={(event) => changeSelectedModelYear(event.target.value)}>
                <option value={initialSelectValue}>Select the model year *</option>
                {arrayModelYears.map((year, keyChildren) => (
                  <option value={year} key={keyChildren}>{year}</option>
                ))}
              </select>
            </div>

            <Button label="Next" className="tw-mt-6" disabled={isDisabledNextBtn} />
          </Form>
        </div>
      </Container>
    </section >
  );
}
