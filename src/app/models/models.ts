
export type CarriersList = {
}

export type InfoBilling = {
    addressLine1: string,
    addressLine2: string,
    attentionInCareOf: string,
    city: string,
    state: string,
    zipCode:  string,    
}

export type InternetPlansList = {

}

export type Message = {
    messageDescription: string;
    messageType: string;
    Status: string;
    Title: string;
}

export type PotentialDates = {
    
}

export type ProductInternet = {
    PlanName: string;
    recurringAmount: string;
}
export type ProductVoice = {}
export type SelectedIsgRewards = {
    value: number;
}

export type VoicePlansList = {

}

export type Products = {
    internetPlans: InternetPlansList[];
    voicePlans: VoicePlansList[];
}

export type SecurityQuestionsList = {

}

export type ShowingCart = {
    productInternet: ProductInternet;
    productVoice: ProductVoice;    
}
