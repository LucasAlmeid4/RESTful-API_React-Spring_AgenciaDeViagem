import CardPromocoes from "../Section_Promocoes/CardPromocoes/CardPromocoes"
function Section_hospedagem({titulo}) {
    return(
        <section className="text-center">
        
        <h2 className="mt-3 p-3">{titulo}</h2>
        <hr/>
        <div className="row opcoes-de-destinos">
            <CardPromocoes foto={'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_960_720.jpg'}
                nome={'Porto'}
                precoAnterior={'2.558.00'}
                preco={'1.982,00'}
                        ></CardPromocoes>

            <CardPromocoes foto={"https://cdn.pixabay.com/photo/2014/12/16/22/25/woman-570883_960_720.jpg"}
                nome={"Praia da Pipa"}
                precoAnterior={'300,00'}
                preco={'200,00'}
                ></CardPromocoes>

          

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2019/04/16/12/09/vietnam-4131606_960_720.jpg'}
                nome={'Vietnã'}
                precoAnterior={'6.000,00'}
                preco={'4.500.00'} 
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2013/11/01/11/13/dolphin-203875_960_720.jpg'}
                nome={'Cananeia'}
                precoAnterior={'600,00'}
                preco={'458,00'}
                ></CardPromocoes>

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2019/10/29/17/56/waterfall-4587690_960_720.jpg'}
                nome={'Paraná'}
                precoAnterior={'200,00'}
                preco={'152,00'}
                ></CardPromocoes>

         <CardPromocoes foto={'https://cdn.pixabay.com/photo/2013/04/11/19/46/building-102840_960_720.jpg'}
                nome={'Frânça'}
                precoAnterior={'8.000,00'}
                preco={'7.852,00'}
                ></CardPromocoes>
                

          <CardPromocoes foto={'https://cdn.pixabay.com/photo/2015/07/14/07/18/greece-844269_960_720.jpg'}
                nome={'Grécia'}
                precoAnterior={'9.800,00'}
                preco={'7.854,00'}
            
                ></CardPromocoes>
          
                <CardPromocoes foto={'https://cdn.pixabay.com/photo/2016/01/29/15/26/abstract-1168134_960_720.jpg'}
                nome={'Amazônia'}
                precoAnterior={'300,00'}
                preco={'250,00'}
                ></CardPromocoes>
        </div>
    </section>
    
    )
}

export default Section_hospedagem