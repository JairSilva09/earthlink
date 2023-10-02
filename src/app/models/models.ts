
type CarriersList = {
}

type InternetPlansList = {

}

type Message = {
    messageDescription: string;
    messageType: string;
    Status: string;
    Title: string;
}

type PotentialDates = {
    
}

type ProductInternet = {}
type ProductVoice = {}

type VoicePlansList = {

}

type Products = {
    internetPlans: InternetPlansList[];
    voicePlans: VoicePlansList[];
}

type SecurityQuestionsList = {

}

type ShowingCart = {
    productInternet: ProductInternet;
    productVoice: ProductVoice;    
}