import Button from "@/components/Button";
import Container from "@/components/Container";
import LoadingPage from "@/components/LoadingPage";
import axios from "axios";
import { Suspense } from "react";

type ParamsType = { makeId: string, year: string }

type RequestType = {
    Results: {
        "Make_ID": 440,
        "Make_Name": "ASTON MARTIN",
        "Model_ID": 1686,
        "Model_Name": "DBS"
    }[] | []
}


export default async function Page({ params }: {
    params: Promise<ParamsType>
}) {
    const { makeId, year } = await params;

    const { data } = await axios.get(`https://vpic.nhtsa.dot.gov/api/vehicles/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)

    const { Results: vehicleMakesData }: RequestType = data;

    return (
        <Suspense fallback={<LoadingPage />}>
            <section>
                <Container>
                    <h1 className="tw-mt-10">MAKE {vehicleMakesData?.[0].Make_Name} <span className="tw-block">MODEL YEAR {year}</span></h1>

                    <article className="tw-text-start tw-max-w-[500px] tw-w-full tw-mx-auto tw-mt-10">
                        <h2 className="tw-text-customWeakDarkBlue">Vehicle models:</h2>

                        <div className="tw-flex tw-flex-col tw-items-stretch tw-justify-center tw-gap-4 tw-mt-2 tw-text-white tw-font-semibold">
                            {vehicleMakesData.map((vehicleMakes, keyChildren) => {
                                return (
                                    <div className="tw-bg-customWeakDarkBlue tw-rounded-[10px] tw-px-3 tw-py-1" key={keyChildren}><p>{vehicleMakes.Model_Name} • {`Make ${vehicleMakes.Make_Name}`} • {year}</p></div>
                                )
                            })}
                        </div>

                        <Button label="Go back" className="tw-mt-10" url="/" />
                    </article>
                </Container>
            </section>
        </Suspense>
    )
}

export async function generateStaticParams() {
    return [];
}