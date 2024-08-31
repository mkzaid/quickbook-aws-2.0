
function addCustumer(QuerryType){
    let QuickBookQuerry='';
    if(QuerryType=='AddCustumer'){
        QuickBookQuerry=`<CustomerAddRq>
        <CustomerAdd>
            <Name>Rehmat Ali</Name>
            <ShipToAddress>
                <Name>Okara</Name>
            </ShipToAddress>
            <Contacts>
                <FirstName>Faisal Rana</FirstName>
                <AdditionalContactRef>
                    <ContactName>Hamza</ContactName>
                    <ContactValue>Hamza@gmail.com</ContactValue>
                </AdditionalContactRef>
            </Contacts>
        </CustomerAdd>
        </CustomerAddRq>`
    }
return `<CustomerAddRq>
<CustomerAdd>
    <Name>Rehmat Ali</Name>
    <ShipToAddress>
        <Name>Okara</Name>
    </ShipToAddress>
    <Contacts>
        <FirstName>Faisal Rana</FirstName>
        <AdditionalContactRef>
            <ContactName>Hamza</ContactName>
            <ContactValue>Hamza@gmail.com</ContactValue>
        </AdditionalContactRef>
    </Contacts>
</CustomerAdd>
</CustomerAddRq>`
}

export {
    addCustumer
}