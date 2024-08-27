import {Field, Fieldset, Label, Legend, Select, Textarea} from "@headlessui/react";
import {Input} from "@headlessui/react";

export default function AddSubforum() {
    return (
        <div className={"px-2 py-1 bg-neutral-50"}>
            <Fieldset className="space-y-4">
                <Legend className="text-lg font-bold">Add subforum</Legend>
                <Field>
                    <Label className={"block"}>Which category?</Label>

                    {/*TODO fetch from backend*/}
                    <Select className="mt-1 block" name="category">
                        <option>General</option>
                        <option>DIY</option>
                    </Select>
                </Field>
                <Field>
                    <Label className="block">Name</Label>
                    <Input className="mt-1 block" name="name" type={"text"}/>
                </Field>
                <Field>
                    <Label className="block">Description</Label>
                    <Input className="mt-1 block" name="description" type={"text"}/>
                </Field>
            </Fieldset>
        </div>
    )
}