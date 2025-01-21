import Button from "@/components/Button";
import Container from "@/components/Container";
import axios from "axios";

type ParamsType = { makeId: string, year: string, makeName: string }

type RequestType = {
    Results: {
        "Make_ID": 440,
        "Make_Name": "ASTON MARTIN",
        "Model_ID": 1686,
        "Model_Name": "DBS"
    }[] | []
}

export async function generateStaticParams() {
    // https://vpic.nhtsa.dot.gov/api/vehicles/ don't exist and because of that I can't make a .map in general
    return ([]);
}

export default async function Page({ params }: {
    params: Promise<ParamsType>
}) {
    const { makeId, year, makeName } = await params;

    const { data }: { data: RequestType } = await axios.get(`${process.env.NEXT_PUBLIC_API_ROUTE}/GetModelsForMakeIdYear/makeId/${makeId}/modelyear/${year}?format=json`)

    const { Results: vehicleMakesData }: RequestType = data;

    const haveVehicleMakes = vehicleMakesData.length > 0;

    return (
        <section>
            <Container>
                <h1 className="tw-mt-10">MAKE {makeName} <span className="tw-block">MODEL YEAR {year}</span></h1>

                <article className="tw-text-start tw-max-w-[500px] tw-w-full tw-mx-auto tw-mt-10">
                    <h2 className="tw-text-customWeakDarkBlue">Vehicle models: {!haveVehicleMakes && "Not found"}</h2>

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
    )
}