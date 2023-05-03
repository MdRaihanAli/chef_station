import React from 'react'
import Rating from 'react-rating';
import { FaArrowRight, FaStar } from 'react-icons/fa';

function Reting() {
    return (
        <div className='my-5'>
            <h3 className='fw-bold text-center my-4'> <span className="text-primary">Review</span> </h3>
            <div className="row g-2">
                <div className="col-md-3">
                    <div className="card p-3 text-center">
                        <img className='rounded-circle mx-auto' width='70' height='70' src="https://scontent.fmct7-1.fna.fbcdn.net/v/t1.6435-9/166941623_2882309722088758_2989647712984387553_n.jpg?stp=dst-jpg_s960x960&_nc_cat=106&ccb=1-7&_nc_sid=e3f864&_nc_eui2=AeH6P0u8pidIBJSmc4ED2lo5pdgo-Zr2g-2l2Cj5mvaD7cTzXv51K9D-yb0GYS5pvwDB6XPAC_QcesXuDAyXSYkG&_nc_ohc=KuDpwST5xmYAX8jt8_t&_nc_ht=scontent.fmct7-1.fna&oh=00_AfAucxe5R654GJUAuxByY3LHrmyv8_BviplDW3vNqIQggA&oe=6479CD22" alt="" />
                        <h5>Md Raihan Ali</h5>
                        <Rating className='text-warning' placeholderRating={3.5}
                            emptySymbol={<FaStar></FaStar>}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar></FaStar>}>
                        </Rating>
                        <p>this campany is very good . restaurants, hotels, and other food service</p>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="card p-3 text-center">
                        <img className='rounded-circle mx-auto' width='70' height='70' src="https://scontent.fmct7-1.fna.fbcdn.net/v/t39.30808-6/291947167_3231844970468563_8372121468962091603_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeE4Nj0eClk0Stt7oHqExa4yamZYFJqMjY1qZlgUmoyNjdcw1OTgTQCXDrjIXldoDeWmNUffXRdWXpdFoj0TJNT2&_nc_ohc=Ml5mhLR7KGQAX-0ni-D&_nc_ht=scontent.fmct7-1.fna&oh=00_AfDa_2-lLn_oieT4zIanftrOThxLAnGhLYJi3A3dkwFppg&oe=64581487" alt="" />
                        <h5>Kamrujjan Esha</h5>
                        <Rating className='text-warning' placeholderRating={3.5}
                            emptySymbol={<FaStar></FaStar>}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar></FaStar>}>
                        </Rating>
                        <p>All staf are very good . restaurants, hotels, and other food telsd</p>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="card p-3 text-center">
                        <img className='rounded-circle mx-auto' width='70' height='70' src="https://scontent.fmct7-1.fna.fbcdn.net/v/t39.30808-6/301247104_112457581581123_278065949741144290_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHqiQKpxhEZ9nBEvgoKxlocVicgxqWWPFpWJyDGpZY8WgpmerqqgrsxvEO_fxYkhla2IBdSV73T1netJt9H4VvT&_nc_ohc=C2ZeqfveL2YAX9i1vIo&_nc_ht=scontent.fmct7-1.fna&oh=00_AfB1X_dLztpHYDu5MTTRrgH2jNcxdZs8Lk6cmrhQYM_EkQ&oe=64571D72" alt="" />
                        <h5>Ahad Ali Hom</h5>
                        <Rating className='text-warning' placeholderRating={3.5}
                            emptySymbol={<FaStar></FaStar>}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar></FaStar>}>
                        </Rating>
                        <p> restaurants, hotels, and other food service All staf are very good </p>
                    </div>
                </div>
                
                <div className="col-md-3">
                    <div className="card p-3 text-center">
                        <img className='rounded-circle mx-auto' width='70' height='70' src="https://scontent.fmct7-1.fna.fbcdn.net/v/t39.30808-6/327666615_731600028320771_5692427562670394278_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEp3c3CKoXIj4w-qTWQhNfcL1v8zxRXYNAvW_zPFFdg0DXqsrE_FNCH3S-OnJ4Duxykd4yMYN8BURuR1kW8c0zo&_nc_ohc=XLckKrcJQgkAX_wjBVl&_nc_ht=scontent.fmct7-1.fna&oh=00_AfDJvgnyUHGSFp2EmBBcaXbfYayaLW4BnYxDQkaYOgMfjA&oe=64570BE9" alt="" />
                        <h5>Akib Ali</h5>
                        <Rating className='text-warning' placeholderRating={3.5}
                            emptySymbol={<FaStar></FaStar>}
                            placeholderSymbol={<FaStar />}
                            fullSymbol={<FaStar></FaStar>}>
                        </Rating>
                        <p>this campany is very good . restaurants, hotels, and other food service</p>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Reting