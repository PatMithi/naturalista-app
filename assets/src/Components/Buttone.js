import React from 'react';
import { Button } from 'native-base';

function Buttone ({mt, bg, color, children, onPress, mb, borderColor, borderWidth}) {
    return (
        <Button w='full' h={55} mt={mt} rounded='full' borderColor={borderColor} borderWidth={borderWidth} mb={mb} bg={bg} _text={{
            color:color, fontWeight:'bold', justifyContent:'center'
        }}
        _pressed={{bg:bg}}
        onPress={onPress}>
            {children}
        </Button>
    )
}

export default Buttone;