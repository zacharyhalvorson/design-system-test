import { Data, Override } from "framer"

const data = Data({ 
    name: "Zachary Halvorson",
    nameInputValue: "",
})

export const GetName: Override = () => {
    return {
        value: data.name,
        onValueChange: (value:string) => {
            data.nameInputValue = value;
        }
    };
}

export const SetName: Override = () => {
    return {
        onTap: () => {
            data.name = data.nameInputValue
        }
    }
}

export const UseName: Override = () => {
    return {
        text: data.name
    };
}
