export default {

    user1: [
        {
            firstName: 'Nicolas',
            lastName: 'Bussière',
            totalSubscription: 25,
            notifications: 1,
            contracts: [
                {
                    state: 'inProgress',
                    title: 'Energie',
                    cta: 'Continuer à souscrire',
                    dataComplete: 10,
                    providerLogo: null,
                    contractType: null,
                    price: null,
                },
                {
                    state: 'inProgress',
                    title: 'Box',
                    cta: 'Continuer à souscrire',
                    dataComplete: 65,
                    providerLogo: 'sfr.png',
                    contractType: 'Fibre plus',
                    price: 29.99,
                },
                {
                    state: 'new',
                    title: 'Assurance',
                    cta: 'Commencer à souscrire',
                    dataComplete: 75,
                    providerLogo: null,
                    contractType: null,
                    price: null,
                },
                {
                    state: 'pending',
                    title: 'Courrier',
                    cta: 'Voir le récapitulatif',
                    dataComplete: null,
                    providerLogo: 'laposte.png',
                    contractType: 'Redirection',
                    price: 9.99,
                }
            ]
        }
    ],

};