<div data-toggle="datetimepicker" data-date-format="{{ isset($format) ? $format : 'Y-m-d H:i' }}">
    <div class="input-group">
        {{ Form::text($name, isset($value) ? $value : null, array_merge(['id' => $name, 'class' => 'form-control text-right' , 'data-input'], $attributes)) }}
        <span class="input-group-addon" data-toggle><i class="icon-calendar"></i></span>
    </div>
</div>