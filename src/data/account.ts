import ncNanoId from "@/utils/ncNanoId";
import {
  ChatBubbleLeftRightIcon,
  EnvelopeIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline";
import { PhoneCall, Video } from "lucide-react";
import * as yup from "yup";

// TODO: improve the schema
export const accountSchema = yup.object().shape({
  name: yup.string().min(3, {
    message: "Username must be at least 3 characters long",
  }),
  gender: yup.string().optional(),
  occupation: yup.string().optional(),
  relationship: yup.string().optional(),
  education: yup.string(),
  age: yup.string(),
  image: yup.string(),
  phone: yup.string(),
  preferredCommunicationMethod: yup.string(),
  preferredLanguage: yup.string(),
});

export const initialFormValues = {
  name: "",
  /* gender: {
    id: ncNanoId(),
    defaultChecked: false,
    label: "male",
    value: "male",
  },
  username: "",
  email: "",
  birthDate: "",
  city: "",
  phone: "", */
};

export const genderOptions = [
  {
    id: ncNanoId(),
    defaultChecked: true,
    label: "male",
    value: "male",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "female",
    value: "female",
  },
];

export const preferredLanguageOptions = [
  {
    id: ncNanoId(),
    defaultChecked: true,
    label: "English",
    value: "english",
  },

  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "French",
    value: "french",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Arabic",
    value: "arabic",
  },
];

export const preferredCommunicationMethodOptions = [
  {
    id: ncNanoId(),
    defaultChecked: true,
    label: "ninjasaas Video",
    value: "ninjasaas-video",
    icon: Video,
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Zoom",
    value: "zoom",
    icon: VideoCameraIcon,
  },

  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Voice call",
    value: "voice-call",
    icon: PhoneCall,
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Text chat",
    value: "text-chat",
    icon: ChatBubbleLeftRightIcon,
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Email",
    value: "email",
    icon: EnvelopeIcon,
  },
];

export const ageOptions = [
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "18-24",
    value: "18-24",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "25-34",
    value: "25-34",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "35-44",
    value: "35-44",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "45-54",
    value: "45-54",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "55-64",
    value: "55-64",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "65+",
    value: "65+",
  },
];

export const occupationOptions = [
  {
    id: ncNanoId(),
    defaultChecked: true,
    label: "Student",
    value: "student",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Employee",
    value: "employee",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Self Employed",
    value: "self-employed",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Unemployed",
    value: "unemployed",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Retired",
    value: "retired",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Other",
    value: "other",
  },
];

export const relationshipOptions = [
  {
    id: ncNanoId(),
    defaultChecked: true,
    label: "Single",
    value: "single",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "In a relationship",
    value: "in-a-relationship",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Married",
    value: "married",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Divorced",
    value: "divorced",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Widowed",
    value: "widowed",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Other",
    value: "other",
  },
];

export const educationOptions = [
  {
    id: ncNanoId(),
    defaultChecked: true,
    label: "High School",
    value: "high-school",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Bachelor's degree",
    value: "bachelor-degree",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Master's degree",
    value: "master-degree",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Doctorate",
    value: "doctorate",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Undergraduate",
    value: "undergraduate",
  },
  {
    id: ncNanoId(),
    defaultChecked: false,
    label: "Prefer not to answer",
    value: "none",
  },
];
