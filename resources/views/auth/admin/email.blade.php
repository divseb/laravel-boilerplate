@extends('layouts.backend')

@section('body_class', 'flex-row align-items-center')

<!-- Main Content -->
@section('body')
    <div class="container">
        <div class="row">
            <div class="col-md-5 mx-auto">
                <div class="card p-4">
                    <div class="card-body">
                        <h1 class="mb-4">@lang('labels.user.login')</h1>

                        <form action="{{ route('login') }}" method="post">
                            {{ csrf_field() }}

                            <div class="form-group">
                                {{ Form::bsEmail('email', null, ['required', 'placeholder' => __('validation.attributes.email')]) }}
                            </div>

                            <div class="form-group">
                                <button class="btn btn-primary btn-block btn-flat">@lang('labels.user.send_password_link')</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
