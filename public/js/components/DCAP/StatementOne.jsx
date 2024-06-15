import React from 'react';
import { Page, Text, View, Document } from '@react-pdf/renderer';


const StatementOne = (props) => {
    const {mainSubject, l1Think, Icon1, synonym1, professional, resource1, product1, word, verb, thinkPro} = props;

    return(
        <Document>
            <Page size="A4">
                <View>
                    <Text>
                        thinkPro && Thinking like {professional}, I {verb} {l1Think} the {synonym1} <img src={Icon1} alt={Icon1} /> {word} {mainSubject}.
                        I will get/organize information using {resource1} and share my findings in {product1}
                    </Text>
                </View>
            </Page>
        </Document>
    )
}

export default StatementOne;